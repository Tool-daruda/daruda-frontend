import * as S from './ImgDetail.styled';

interface ImgDetailPropsType {
  handleModalClose: () => void;
  imgList: string[];
}

const ImgDetail = ({ handleModalClose, imgList }: ImgDetailPropsType) => {
  return (
    <S.ModalOverlay>
      <S.CloseBtn onClick={handleModalClose} />
      <S.ModalInnerWrapper>
        <S.ImgThumb>
          {imgList.map((img, index) => (
            <img key={img} src={img} alt={`preview-${index}`} />
          ))}
        </S.ImgThumb>
        <S.ModalContent src={imgList[0]} alt="Selected Image" onClick={(e) => e.stopPropagation()} />
      </S.ModalInnerWrapper>
    </S.ModalOverlay>
  );
};

export default ImgDetail;
