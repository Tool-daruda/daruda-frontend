import BreadCrumb from './components/breadcrumb/BreadCrumb';
import CoreFeature from './components/coreFeatures/CoreFeature';
import PlanBox from './components/planBox/PlanBox';
import ReferenceVideo from './components/referenceVideo/ReferenceVideo';
import Sidewing from './components/sidewing/Sidewing';
import ToolInfoCard from './components/toolInfoCard/ToolInfoCard';
import ToolIntro from './components/toolIntro/ToolIntro';
import * as S from './ToolDetail.styled';

const ToolDetail = () => {
  //   const handleScrollUp = () => {
  //     if (!window.scrollY) return;
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  // };
  return (
    <S.ToolDetailWrapper>
      <BreadCrumb topicsState={[]} toolsState={[]} />
      <ToolInfoCard toolImage={''} description={''} license={''} koreanSupport={false} platforms={[]} />
      <S.ToolDetailContainer>
        <S.ToolDetailBox>
          <ToolIntro toolKey={'slack'} toolImage={''} />
          <CoreFeature />
          <ReferenceVideo />
          <PlanBox />
        </S.ToolDetailBox>
        <Sidewing
          defaultCard={{
            toolLogo: '',
            toolNameMain: '',
            keyWordList: [],
          }}
          multiLineCard={{
            toolLogo: '',
            toolNameMain: '',
            keyWordList: [],
          }}
        />
      </S.ToolDetailContainer>
    </S.ToolDetailWrapper>
  );
};

export default ToolDetail;
// test
