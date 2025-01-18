import { IcWatchWhite40 } from '@assets/svgs';
import ImgDetail from '@components/imgDetail/ImgDetail';
import { useState } from 'react';

import * as S from './ToolIntro.styled';

export interface ToolIntroPropTypes {
  toolImage: string[];
  activeTool: string;
  description: string;
}

const ToolIntro = ({ toolImage, activeTool, description }: ToolIntroPropTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImgFocus = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.ToolIntroWrapper>
        <S.IntroImgBox>
          {toolImage ? <img src={toolImage[0]} alt={`${activeTool} 이미지`} /> : '툴 이미지'}
          <IcWatchWhite40 className="hover-icon" onClick={handleImgFocus} />
        </S.IntroImgBox>
        <S.ToolInfoBox>
          <span>{activeTool}을 소개합니다.</span>
          <pre>{description}</pre>
        </S.ToolInfoBox>
      </S.ToolIntroWrapper>
      <S.DividingLine />

      {/* ImgDetail 모달 */}
      {isModalOpen && <ImgDetail handleModalClose={handleModalClose} imgList={toolImage} index={0} />}
    </>
  );
};

export default ToolIntro;
