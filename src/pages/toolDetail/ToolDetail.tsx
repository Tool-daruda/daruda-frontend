import Spacing from '@components/spacing/Spacing';

import BreadCrumb from './components/breadcrumb/BreadCrumb';
import ToolCommunity from './components/community/Community';
import CoreFeature from './components/coreFeatures/CoreFeature';
import PlanBox from './components/planBox/PlanBox';
import ReferenceVideo from './components/referenceVideo/ReferenceVideo';
import Sidewing from './components/sidewing/Sidewing';
import ToolInfoCard from './components/toolInfoCard/ToolInfoCard';
import ToolIntro from './components/toolIntro/ToolIntro';
import { DETAIL_RESPONSE } from './mocks/category';
import * as S from './ToolDetail.styled';

const ToolDetail = () => {
  return (
    <S.ToolDetailWrapper>
      <Spacing size={'1.8'} />
      <BreadCrumb
        activeTopic={DETAIL_RESPONSE.data.tools.keywords[0]}
        activeTool={DETAIL_RESPONSE.data.tools.toolName}
      />
      <Spacing size={'1.8'} />
      <ToolInfoCard toolImage={''} description={''} license={''} koreanSupport={false} platforms={[]} />
      <Spacing size={'1'} />

      <S.ToolDetailContainer>
        <section>
          <S.ToolDetailBox>
            <ToolIntro toolKey={'slack'} toolImage={''} />
            <CoreFeature />
            <ReferenceVideo />
            <PlanBox />
            <Spacing size={'1'} />
          </S.ToolDetailBox>
          <Spacing size={'1'} />

          <S.ToolCommunityBox>
            <ToolCommunity cards={[]} />
          </S.ToolCommunityBox>
          <Spacing size={'7.2'} />
        </section>

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
