import { IcCommentGray24, IcBookmark, IcOverflowGray44, ImgModalexit } from '@assets/svgs';
import SquareButton from '@components/button/squareButton/SquareButton';
import Chip from '@components/chip/Chip';
import DropDown from '@components/dropdown/DropDown';
import { AlterModal } from '@components/modal';
import { useModal } from '@pages/community/hooks';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import * as S from './PostCard.styled';

interface CardDataProp {
  post: {
    boardId: number;
    toolId: number;
    toolName: string;
    toolLogo: string;
    title: string;
    content: string;
    images: string[];
    updatedAt: string;
    nickName: string;
    commentCount: number;
  };
  forDetail?: boolean;
}

const Card = forwardRef<HTMLLIElement, CardDataProp>((props, ref) => {
  const { post, forDetail = false } = props;
  const { boardId, toolName, toolLogo, title, content, images, updatedAt, nickName, commentCount } = post;

  const { isOpen, handleModalOpen, handleModalClose, preventPropogation } = useModal();

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
          <S.CardTopContent>
            <header>
              <Chip size="medium" stroke={true}>
                <Chip.RectContainer>
                  <Chip.Icon src={toolLogo} alt={`icon-${toolName}`} height={2} />
                  <Chip.Label>{toolName}</Chip.Label>
                </Chip.RectContainer>
              </Chip>
              <S.MetaInfo>
                <span>{nickName}</span>
                <span>|</span>
                <span>{updatedAt}</span>
              </S.MetaInfo>
            </header>
            <S.CardTitleItem>{title}</S.CardTitleItem>
            <S.CardTextItem $isImgInclude={images.length >= 1} $forDetail={forDetail}>
              {content}
            </S.CardTextItem>
            <S.ImageGrid $imageCount={images.length}>
              {images.map((image, i) => (
                <img key={i} src={image} alt={`Post-card-img-${i}`} />
              ))}
            </S.ImageGrid>
          </S.CardTopContent>
          <S.CardDivider />
          <S.CardBottomBar onClick={preventPropogation}>
            <S.BottomBarLeft>
              <SquareButton icon={<IcCommentGray24 />} size="small" stroke={false}>{`${commentCount}개`}</SquareButton>
              <SquareButton icon={<IcBookmark />} size="small" stroke={false}>
                북마크
              </SquareButton>
            </S.BottomBarLeft>
            <DropDown position="end">
              <DropDown.ToggleBtn>
                <IcOverflowGray44 />
              </DropDown.ToggleBtn>
              <DropDown.Content $display="bottom">
                <DropDown.Item
                  onClick={() => {
                    alert('클릭!');
                  }}
                >
                  수정하기
                </DropDown.Item>
                <DropDown.Item status="danger" onClick={handleModalOpen}>
                  삭제하기
                </DropDown.Item>
              </DropDown.Content>
            </DropDown>
          </S.CardBottomBar>
        </S.CardLayout>
      </Link>
      <AlterModal
        modalTitle="글을 삭제하시겠어요?"
        isOpen={isOpen}
        handleClose={handleModalClose}
        isSingleModal={false}
        ImgPopupModal={ImgModalexit}
        modalContent="삭제된 글은 다시 볼 수 없어요"
        DoublebtnProps={{
          isPrimaryRight: false,
          primaryBtnContent: '한 번 더 생각할게요',
          secondaryBtnContent: '삭제하기',
        }}
      />
    </S.CardWrapper>
  );
});

// forwrad 사용으로 인한, 디버깅 목적으로 사용
Card.displayName = 'Card';

export default Card;
