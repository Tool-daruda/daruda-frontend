import Spacing from '@components/spacing/Spacing';
import Title from '@components/title/Title';
import { useRef } from 'react';

import BreadCrumb from './components/breadcrumb/BreadCrumb';
import ToolCommunity from './components/community/Community';
import CoreFeature from './components/coreFeatures/CoreFeature';
import PlanBox from './components/planBox/PlanBox';
import ReferenceVideo from './components/referenceVideo/ReferenceVideo';
import Sidewing from './components/sidewing/Sidewing';
import ToolInfoCard from './components/toolInfoCard/ToolInfoCard';
import ToolIntro from './components/toolIntro/ToolIntro';
import { COMMUNITY_RESPONSE } from './mocks/community';
import { DETAIL_RESPONSE } from './mocks/toolData';
import * as S from './ToolDetail.styled';

const ToolDetail = () => {
  const ToolIntroRef = useRef<HTMLDivElement>(null);
  const CoreFeatureRef = useRef<HTMLDivElement>(null);
  const ReferenceVideoRef = useRef<HTMLDivElement>(null);
  const PlanBoxRef = useRef<HTMLDivElement>(null);
  const ToolCommunityRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    1: ToolIntroRef,
    2: CoreFeatureRef,
    3: ReferenceVideoRef,
    4: PlanBoxRef,
    5: ToolCommunityRef,
  };

  return (
    <>
      <Title title={DETAIL_RESPONSE.data.toolMainName} tool={DETAIL_RESPONSE.data.toolMainName} />
      <S.ToolDetailWrapper>
        <Spacing size={'1.8'} />
        <BreadCrumb activeTopic={DETAIL_RESPONSE.data.category} activeTool={DETAIL_RESPONSE.data.toolMainName} />
        <Spacing size={'1.8'} />
        <ToolInfoCard toolData={DETAIL_RESPONSE.data} />

        <Spacing size={'1'} />

        <S.ToolDetailContainer>
          <section>
            <S.ToolDetailBox>
              <ToolIntro
                ref={ToolIntroRef}
                toolImage={DETAIL_RESPONSE.data.images}
                activeTool={DETAIL_RESPONSE.data.toolMainName}
                description={DETAIL_RESPONSE.data.detailDescription}
              />
              <CoreFeature ref={CoreFeatureRef} />
              <ReferenceVideo ref={ReferenceVideoRef} />
              <PlanBox ref={PlanBoxRef} />
              <Spacing size={'1'} />
            </S.ToolDetailBox>
            <Spacing size={'1'} />

            <S.ToolCommunityBox>
              <ToolCommunity cards={COMMUNITY_RESPONSE.data.contents} ref={ToolCommunityRef} />
            </S.ToolCommunityBox>
            <Spacing size={'7.2'} />
          </section>
          <Sidewing sectionRefs={sectionRefs} />
        </S.ToolDetailContainer>
      </S.ToolDetailWrapper>
    </>
  );
};

export default ToolDetail;
