import { useToolData } from '@apis/tool/getToolData';
import Spacing from '@components/spacing/Spacing';
import Title from '@components/title/Title';
import { useRef } from 'react';
import { useParams } from 'react-router-dom'; // useParams 가져오기

import BreadCrumb from './components/breadcrumb/BreadCrumb';
import ToolCommunity from './components/community/Community';
import CoreFeature from './components/coreFeatures/CoreFeature';
import PlanBox from './components/planBox/PlanBox';
import ReferenceVideo from './components/referenceVideo/ReferenceVideo';
import Sidewing from './components/sidewing/Sidewing';
import ToolInfoCard from './components/toolInfoCard/ToolInfoCard';
import ToolIntro from './components/toolIntro/ToolIntro';
import { COMMUNITY_RESPONSE } from './mocks/community';
import * as S from './ToolDetail.styled';

const ToolDetail = () => {
  const { toolId } = useParams(); // URL에서 toolId 가져오기
  const ToolIntroRef = useRef<HTMLDivElement>(null);
  const CoreFeatureRef = useRef<HTMLDivElement>(null);
  const ReferenceVideoRef = useRef<HTMLDivElement>(null);
  const PlanBoxRef = useRef<HTMLDivElement>(null);
  const ToolCommunityRef = useRef<HTMLDivElement>(null);

  // toolId를 숫자로 변환하여 전달
  const numericToolId = Number(toolId);
  const { data } = useToolData(numericToolId);

  const sectionRefs = {
    1: ToolIntroRef,
    2: CoreFeatureRef,
    3: ReferenceVideoRef,
    4: PlanBoxRef,
    5: ToolCommunityRef,
  };

  if (data) {
    return (
      <>
        <Title title={data.toolMainName} tool={data.toolMainName} />
        <S.ToolDetailWrapper>
          <Spacing size={'1.8'} />
          <BreadCrumb activeTopic={data.category} activeTool={data.toolMainName} />
          <Spacing size={'1.8'} />
          <ToolInfoCard toolData={data} />

          <Spacing size={'1'} />

          <S.ToolDetailContainer>
            <section>
              <S.ToolDetailBox>
                <ToolIntro
                  ref={ToolIntroRef}
                  toolImage={data.images}
                  activeTool={data.toolMainName}
                  description={data.detailDescription}
                />
                <CoreFeature ref={CoreFeatureRef} toolId={numericToolId} />
                <ReferenceVideo ref={ReferenceVideoRef} toolId={numericToolId} />
                <PlanBox ref={PlanBoxRef} toolId={numericToolId} />

                <Spacing size={'1'} />
              </S.ToolDetailBox>
              <Spacing size={'1'} />

              <S.ToolCommunityBox>
                <ToolCommunity cards={COMMUNITY_RESPONSE.data.contents} ref={ToolCommunityRef} />
              </S.ToolCommunityBox>
              <Spacing size={'7.2'} />
            </section>
            <Sidewing sectionRefs={sectionRefs} toolId={numericToolId} />
          </S.ToolDetailContainer>
        </S.ToolDetailWrapper>
      </>
    );
  }
  // 데이터가 로드되지 않은 경우 null 반환
  return null;
};

export default ToolDetail;
