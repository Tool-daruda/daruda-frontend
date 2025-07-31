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
import { useToolDetailQuery } from '@apis/tool';
import Meta from '@components/meta/Meta';
import Spacing from '@components/spacing/Spacing';
import { slug_to_id } from '@constants/slugMap';
import NotFound from '@pages/error/NotFound';

const ToolDetail = () => {
  const { toolParam } = useParams<{ toolParam: string }>();
  const navigate = useNavigate();

  const ToolIntroRef = useRef<HTMLDivElement>(null);
  const CoreFeatureRef = useRef<HTMLDivElement>(null);
  const ReferenceVideoRef = useRef<HTMLDivElement>(null);
  const PlanBoxRef = useRef<HTMLDivElement>(null);
  const ToolCommunityRef = useRef<HTMLDivElement>(null);
  const slugKey = toolParam?.toLowerCase() as keyof typeof slug_to_id;

  const isNumeric = /^\d+$/.test(toolParam as string);
  const toolId = isNumeric ? Number(toolParam) : slug_to_id[slugKey];

  const numericToolId = Number(toolId);
  const { data, isError } = useToolDetailQuery(numericToolId);

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
  if (!toolId) {
    return <NotFound />;
  }

  if (data) {
    return (
      <>
        <Meta
          title={data.toolMainName}
          tool={data.toolMainName}
          toolSubname={data.toolSubName}
          description={data.description}
          keywords={data.keywords}
          category={data.category}
          image={data.toolLogo}
        />
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
                  toolSubname={data.toolSubName}
                />
                <CoreFeature ref={CoreFeatureRef} toolId={numericToolId} />
                <ReferenceVideo ref={ReferenceVideoRef} toolId={numericToolId} alternate={data.toolLogo} />
                <PlanBox ref={PlanBoxRef} toolId={numericToolId} />

                <Spacing size="1" />
              </S.ToolDetailBox>
              <Spacing size="1" />

              <S.ToolCommunityBox ref={ToolCommunityRef}>
                <ToolCommunity
                  toolId={numericToolId}
                  boardId={0}
                  onClick={() => {
                    navigate('/community', {
                      state: { toolId: data.toolId, toolLogo: data.toolLogo, toolName: data.toolMainName },
                    });
                  }}
                />
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
