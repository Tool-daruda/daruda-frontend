import { useBoardDelete, useBoardScrap } from '@apis/board/queries';
import {
  IcCommentGray24,
  IcBookmark,
  IcOverflowGray44,
  IcWatchWhite40,
  ImgModalcheck,
  ImgPopupDelete84,
} from '@assets/svgs';
import SquareButton from '@components/button/squareButton/SquareButton';
import Chip from '@components/chip/Chip';
import DropDown from '@components/dropdown/DropDown';
import ImgDetail from '@components/imgDetail/ImgDetail';
import { AlterModal } from '@components/modal';
import Toast from '@components/toast/Toast';
import { useModal } from '@pages/community/hooks';
import { useToastOpen } from '@pages/CommunityDetail/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { forwardRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Post } from 'src/types/post';

import * as S from './PostCard.styled';

interface CardDataProp {
  post: Post;
  forDetail?: boolean;
  isLoading?: boolean;
}

const Card = forwardRef<HTMLLIElement, CardDataProp>((props, ref) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { post, forDetail = false } = props;
  const { boardId, toolName, toolLogo, toolId, title, content, images, updatedAt, author, commentCount, isScraped } =
    post;
  const [isOwnPost, setIsOwnPost] = useState(false);
  const { isToastOpen, handleModalOpen: handleToastOpen } = useToastOpen();

  const { isOpen, modalType, handleModalClose, preventPropogation, handleModal } = useModal();

  const [clickedIdx, setClickedIdx] = useState(0);
  const [isWarning, setIsWarning] = useState(false);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const { isSuccess: isBookMarkSuccess, mutate: srapMutate } = useBoardScrap(handleToastOpen);
  const [isClicked, setIsClicked] = useState(isScraped);

  useEffect(() => {
    const postOwner = localStorage.getItem('user');

    if (postOwner) {
      const user = JSON.parse(postOwner);
      const ownPost = user.nickname === author;
      setIsOwnPost(ownPost);
    }
  }, [boardId, author]);

  const handleIdxRecord = (idx: number) => {
    setClickedIdx(idx);
  };

  const handleImgFocus = () => {
    setIsImgModalOpen(true);
  };

  const handleImgModalClose = () => {
    setIsImgModalOpen(false);
  };

  const handleScrap = (boardId: number) => {
    srapMutate(boardId);
    if (isBookMarkSuccess) {
      setIsClicked((prev) => !prev);
    }

    const postOwner = localStorage.getItem('user');
    if (postOwner == null || postOwner == undefined) {
      handleWarnnig();
    }

    handleToastOpen();
  };

  const handleWarnnig = () => {
    setIsWarning(true);

    setTimeout(() => {
      setIsWarning(false);
    }, 3000);
  };

  const noTopic = toolId === null;
  const { mutate: DeleteMutate } = useBoardDelete(boardId, toolId, noTopic);

  const handleImgModalDel = () => {
    DeleteMutate(boardId, {
      onSuccess: () => {
        queryClient.refetchQueries({
          queryKey: ['boards'],
          filters: { noTopic, size: 10, lastBoardId: -1, toolId },
        });
        handleModalClose();
      },
    });
  };
  return (
    <S.CardWrapper $forDetail={forDetail} ref={ref}>
      <Link
        to={`/community/${boardId}`}
        key={boardId}
        onClick={(e) => {
          if (forDetail) {
            e.preventDefault();
          }
        }}
      >
        <S.CardLayout>
          {isImgModalOpen && (
            <ImgDetail handleModalClose={handleImgModalClose} imgList={[...images]} index={clickedIdx} />
          )}
          <S.CardTopContent>
            <header>
              <Chip size="medium" stroke={true}>
                <Chip.RectContainer>
                  <Chip.Icon src={toolLogo} alt={`icon-${toolName}`} height={2} />
                  <Chip.Label>{toolName}</Chip.Label>
                </Chip.RectContainer>
              </Chip>
              <S.MetaInfo>
                <span>{author}</span>
                <span>{updatedAt}</span>
              </S.MetaInfo>
            </header>
            <S.CardTitleItem>{title}</S.CardTitleItem>
            <S.CardTextItem $isImgInclude={images.length >= 1} $forDetail={forDetail}>
              {content}
            </S.CardTextItem>
            <S.ImageGrid $imageCount={images.length} $forDetail={forDetail}>
              {images?.map((image, idx) => (
                <S.EachImgContainer key={idx} $imageCount={images.length} $forDetail={forDetail}>
                  <img src={image} alt={`Post-card-img-${idx}`} />
                  {forDetail && (
                    <IcWatchWhite40
                      className="hover-icon"
                      onClick={() => {
                        handleImgFocus();
                        handleIdxRecord(idx);
                      }}
                    />
                  )}
                </S.EachImgContainer>
              ))}
            </S.ImageGrid>
          </S.CardTopContent>
          <S.CardDivider />
          <S.CardBottomBar onClick={preventPropogation}>
            <S.BottomBarLeft>
              <SquareButton
                icon={<IcCommentGray24 />}
                size="small"
                stroke={false}
                handleClick={() => {
                  navigate(`/community/${boardId}`);
                }}
              >{`${commentCount}개`}</SquareButton>
              <SquareButton
                icon={<IcBookmark />}
                isBook={isClicked}
                size="small"
                stroke={false}
                forBookMark={true}
                handleClick={() => handleScrap(boardId)}
              >
                북마크
              </SquareButton>
            </S.BottomBarLeft>
            <DropDown position="end">
              <DropDown.Content $display="top">
                {isOwnPost ? (
                  <>
                    <DropDown.Item status="danger" onClick={() => handleModal('삭제')}>
                      삭제하기
                    </DropDown.Item>
                    <DropDown.Item onClick={() => navigate(`/community/modify/${boardId}`, { state: { post } })}>
                      수정하기
                    </DropDown.Item>
                  </>
                ) : (
                  <DropDown.Item status="danger" onClick={() => handleModal('신고')}>
                    신고하기
                  </DropDown.Item>
                )}
              </DropDown.Content>
              <DropDown.ToggleBtn>
                <IcOverflowGray44 />
              </DropDown.ToggleBtn>
            </DropDown>
          </S.CardBottomBar>
        </S.CardLayout>
      </Link>
      {modalType === '신고' ? (
        <AlterModal
          modalTitle="신고 접수가 완료되었어요"
          isOpen={isOpen}
          handleClose={handleModalClose}
          isSingleModal={true}
          ImgPopupModal={ImgModalcheck}
          singleBtnContent="확인했어요"
        />
      ) : (
        <AlterModal
          modalTitle="글을 삭제하시겠어요?"
          isOpen={isOpen}
          handleClose={handleImgModalDel}
          isSingleModal={false}
          ImgPopupModal={ImgPopupDelete84}
          modalContent="삭제된 글은 다시 볼 수 없어요"
          DoublebtnProps={{
            isPrimaryRight: false,
            primaryBtnContent: '한 번 더 생각할게요',
            secondaryBtnContent: '삭제하기',
            handleSecondClose: handleModalClose,
          }}
        />
      )}
      {isToastOpen && isBookMarkSuccess && (
        <Toast isVisible={isToastOpen} isWarning={false}>
          {isClicked ? '북마크되었어요' : '북마크가 취소되었어요'}
        </Toast>
      )}
      {isWarning && (
        <Toast isVisible={isWarning} isWarning={true}>
          로그인 후 가능한 서비스입니다.
        </Toast>
      )}
    </S.CardWrapper>
  );
});

// forwrad 사용으로 인한, 디버깅 목적으로 사용
Card.displayName = 'Card';

export default Card;
