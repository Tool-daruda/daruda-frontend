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
          {imgList?.map((img, index) => (
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
      {imgList.length > 1 && (
        <S.BtnWrapper>
          <S.PrevBtn
            $isActive={activeIndex !== 0}
            onClick={() => activeIndex !== 0 && setActiveIndex((prev) => prev - 1)}
          />
          <S.NextBtn
            $isActive={activeIndex !== imgList.length - 1}
            onClick={() => activeIndex !== imgList.length - 1 && setActiveIndex((prev) => prev + 1)}
          />
        </S.BtnWrapper>
      )}
    </S.ModalOverlay>
  );
};

export default ImgDetail;
