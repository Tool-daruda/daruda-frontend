import { useState } from 'react';

import * as S from './ImgDetail.styled';

interface ImgDetailPropsType {
  handleModalClose: () => void;
  imgList: string[];
  index: number;
}

const ImgDetail = ({ handleModalClose, imgList, index }: ImgDetailPropsType) => {
  const [activeIndex, setActiveIndex] = useState(index);
  return (
    <S.ModalOverlay>
      <S.CloseBtn onClick={handleModalClose} />
      <S.ModalInnerWrapper>
        <S.ImgThumb>
          {imgList.map((img, index) => (
            <S.PreviewImg
              key={img}
              src={img}
              alt={`preview-${index}`}
              onClick={() => setActiveIndex(index)}
              $isActive={activeIndex === index}
            />
          ))}
        </S.ImgThumb>
        <S.ModalContent src={imgList[activeIndex]} alt="Selected Image" onClick={(e) => e.stopPropagation()} />
      </S.ModalInnerWrapper>
    </S.ModalOverlay>
  );
};

export default ImgDetail;
