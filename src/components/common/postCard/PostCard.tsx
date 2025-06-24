import { forwardRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as S from './PostCard.styled';
import { PostResponse as Post } from '@apis/board/board.model';
import { useBoardDeleteMutation, useBoardScrapMutation } from '@apis/board/board.queries';
import { IcCommentGray24, IcBookmark, IcOverflowGray44, IcWatchWhite40, ImgPopupDelete84 } from '@assets/svgs';
import SquareButton from '@components/button/squareButton/SquareButton';
import Chip from '@components/chip/Chip';
import DropDown from '@components/dropdown/DropDown';
import ImgDetail from '@components/imgDetail/ImgDetail';
import { AlterModal, ReportModal } from '@components/modal';
import Toast from '@components/toast/Toast';
import { useToastOpen } from '@hooks/index';
import usePostActions from '@hooks/usePostControl';

interface CardDataProp {
  post: Post;
  forDetail?: boolean;
  isLoading?: boolean;
  pickedtool?: number | null;
  noTopic?: boolean;
}

const Card = forwardRef<HTMLLIElement, CardDataProp>((props, ref) => {
  const navigate = useNavigate();
  // prop 으로 전달 받은 board 정보
  const { post, forDetail = false, pickedtool, noTopic } = props;
  const { boardId, toolName, toolLogo, toolId, title, content, images, updatedAt, author, commentCount, isScraped } =
    post;

  const {
    isOwnPost,
    isOpen,
    modalType,
    isWarning,
    handleModalOpen,
    handleModalClose,
    handleReport,
    preventPropogation,
    handleWarning,
  } = usePostActions(author);
  const { isToastOpen, handleModalOpen: handleToastOpen } = useToastOpen(); // 토스트 팝업 훅

  const [clickedIdx, setClickedIdx] = useState(0);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const { isSuccess: isBookMarkSuccess, mutate: srapMutate } = useBoardScrapMutation(pickedtool, noTopic, boardId);

  const handleIdxRecord = (idx: number) => {
    setClickedIdx(idx);
  };

  const handleImgFocus = () => {
    setIsImgModalOpen(true);
  };

  const handleImgModalClose = () => {
    setIsImgModalOpen(false);
  };

  const handleTaostMsg = (msg: string) => {
    setToastMessage(msg);
  };

  // 북마크 추가 / 삭제 함수
  const handleScrap = (boardId: number) => {
    srapMutate(boardId);

    const postOwner = localStorage.getItem('user');
    if (postOwner == null || postOwner == undefined) {
      handleWarning();
    }

    handleToastOpen();
  };

  useEffect(() => {
    if (isBookMarkSuccess) {
      handleTaostMsg(isScraped ? '북마크가 되었어요' : '북마크가 취소되었어요');
    }
  }, [isBookMarkSuccess, isScraped]);

  const { mutate: DeleteMutate } = useBoardDeleteMutation(boardId, toolId, toolId === null);

  const handleImgModalDel = () => {
    DeleteMutate(boardId);
  };

  return (
    <S.CardWrapper $forDetail={forDetail} ref={ref}>
      <Link
        to={`/community/${boardId}`}
        key={boardId}
        onClick={(e) => {
          if (forDetail) {
            e.preventDefault();
          } else {
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
          }
        }}
      >
        <S.CardLayout>
          {isImgModalOpen && (
            <ImgDetail handleModalClose={handleImgModalClose} imgList={[...images]} index={clickedIdx} />
          )}
          <S.CardTopContent>
            <header>
              <Chip size="medium" stroke>
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
            <S.CardTextItem $isImgInclude={images?.length >= 1} $forDetail={forDetail}>
              {content}
            </S.CardTextItem>
            <S.ImageGrid $imageCount={images?.length} $forDetail={forDetail}>
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
                isBook={isScraped}
                size="small"
                stroke={false}
                forBookMark
                handleClick={() => handleScrap(boardId)}
              >
                북마크
              </SquareButton>
            </S.BottomBarLeft>
            <DropDown position="end">
              <DropDown.Content $display="top">
                {isOwnPost ? (
                  <>
                    <DropDown.Item status="danger" onClick={() => handleModalOpen('삭제')}>
                      삭제하기
                    </DropDown.Item>
                    <DropDown.Item onClick={() => navigate(`/community/modify/${boardId}`, { state: { post } })}>
                      수정하기
                    </DropDown.Item>
                  </>
                ) : (
                  <DropDown.Item status="danger" onClick={handleReport}>
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
        <ReportModal
          isOpen={isOpen}
          handleClose={handleModalClose}
          boardId={boardId}
          handleToastOpen={handleToastOpen}
          handleTaostMsg={handleTaostMsg}
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
      {isToastOpen && (
        <Toast isVisible={isToastOpen} isWarning={false}>
          {toastMessage}
        </Toast>
      )}
      {isWarning && (
        <Toast isVisible={isWarning} isWarning>
          로그인 후 가능한 서비스입니다.
        </Toast>
      )}
    </S.CardWrapper>
  );
});

// forwrad 사용으로 인한, 디버깅 목적으로 사용
Card.displayName = 'Card';

export default Card;
