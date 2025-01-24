import { useToolData } from '@apis/tool/getToolData';
import Spacing from '@components/spacing/Spacing';
import Title from '@components/title/Title';
import NotFound from '@pages/error/NotFound';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BreadCrumb from './components/breadcrumb/BreadCrumb';
import ToolCommunity from './components/community/Community';
import CoreFeature from './components/coreFeatures/CoreFeature';
import PlanBox from './components/planBox/PlanBox';
import ReferenceVideo from './components/referenceVideo/ReferenceVideo';
import Sidewing from './components/sidewing/Sidewing';
import ToolInfoCard from './components/toolInfoCard/ToolInfoCard';
import ToolIntro from './components/toolIntro/ToolIntro';
import * as S from './ToolDetail.styled';

const ToolDetail = () => {
  const { toolId } = useParams<{ toolId: string }>(); // useParams 타입 명시
  const ToolIntroRef = useRef<HTMLDivElement>(null);
  const CoreFeatureRef = useRef<HTMLDivElement>(null);
  const ReferenceVideoRef = useRef<HTMLDivElement>(null);
  const PlanBoxRef = useRef<HTMLDivElement>(null);
  const ToolCommunityRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const numericToolId = Number(toolId);
  const { data, isError } = useToolData(numericToolId);

  const sectionRefs = {
    1: ToolIntroRef,
    2: CoreFeatureRef,
    3: ReferenceVideoRef,
    4: PlanBoxRef,
    5: ToolCommunityRef,
  };

  if (isError) {
    return <NotFound />;
  }

  if (data) {
    const goCommunity = () => {
      navigate('/community', {
        state: {
          toolId: data.toolId,
          toolLogo: data.toolLogo,
          toolMainName: data.toolMainName,
        },
      });
    };

    return (
      <>
        <Title title={data.toolMainName} tool={data.toolMainName} />
        <S.ToolDetailWrapper>
          <Spacing size="1.8" />
          <BreadCrumb activeTopic={data.category} activeTool={data.toolMainName} />
          <Spacing size="1.8" />
          <ToolInfoCard toolData={data} />

          <Spacing size="1" />

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
                <ReferenceVideo ref={ReferenceVideoRef} toolId={numericToolId} alternate={data.toolLogo} />
                <PlanBox ref={PlanBoxRef} toolId={numericToolId} />

                <Spacing size="1" />
              </S.ToolDetailBox>
              <Spacing size="1" />

              <S.ToolCommunityBox>
                <ToolCommunity toolId={numericToolId} ref={ToolCommunityRef} boardId={0} onClick={goCommunity} />
              </S.ToolCommunityBox>
              <Spacing size="7.2" />
            </section>
            <Sidewing sectionRefs={sectionRefs} toolId={numericToolId} />
          </S.ToolDetailContainer>
        </S.ToolDetailWrapper>
      </>
    );
  }

  return null;
};

export default ToolDetail;
