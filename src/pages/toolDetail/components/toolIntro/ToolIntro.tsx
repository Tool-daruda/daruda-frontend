import { forwardRef, useState } from 'react';

import * as S from './ToolIntro.styled';
import { IcWatchWhite40 } from '@assets/svgs';
import ImgDetail from '@components/imgDetail/ImgDetail';
import { useAnalytics } from 'src/hoc/useAnalytics';

export interface ToolIntroPropTypes {
  toolImage: string[];
  activeTool: string;
  description: string;
  toolSubname: string;
}

const ToolIntro = forwardRef<HTMLDivElement, ToolIntroPropTypes>(
  ({ toolImage, activeTool, description, toolSubname }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { trackEvent } = useAnalytics();

    const handleImgFocus = () => {
      trackEvent('Tool_Click', { Image: activeTool });
      setIsModalOpen(true);
    };

    const handleModalClose = () => {
      setIsModalOpen(false);
    };

    const getIntroductionText = () => {
      let textToEvaluate = activeTool;

      if (!/[가-힣]/.test(activeTool)) {
        textToEvaluate = toolSubname;
      }

      const lastChar = textToEvaluate[textToEvaluate.length - 1];
      const lastCharCode = lastChar.charCodeAt(0);

      // 한글이 아닌 경우
      if (lastCharCode < 0xac00 || lastCharCode > 0xd7a3) {
        return `${activeTool}를 소개합니다.`.trim();
      }

      if ((lastCharCode - 0xac00) % 28 > 0) {
        return `${activeTool}을 소개합니다.`.trim(); // 받침이 있으면 '을'
      } else {
        return `${activeTool}를 소개합니다.`.trim(); // 받침이 없으면 '를'
      }
    };

    return (
      <div ref={ref}>
        <S.ToolIntroWrapper>
          <S.IntroImgBox>
            {toolImage ? <img src={toolImage[0]} alt={`${activeTool} 이미지`} /> : '툴 이미지'}
            <IcWatchWhite40 className="hover-icon" onClick={handleImgFocus} />
          </S.IntroImgBox>
          <S.ToolInfoBox>
            <span>{getIntroductionText()}</span>
            <pre>{description}</pre>
          </S.ToolInfoBox>
        </S.ToolIntroWrapper>
        <S.DividingLine />

        {isModalOpen && <ImgDetail handleModalClose={handleModalClose} imgList={toolImage} index={0} />}
      </div>
    );
  },
);

ToolIntro.displayName = 'ToolIntro';

export default ToolIntro;
