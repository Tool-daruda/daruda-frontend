import { useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
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
import { CategorList } from '@components/header/category/types';
import Meta from '@components/meta/Meta';
import Spacing from '@components/spacing/Spacing';
import { slug_to_id } from '@constants/slugMap';
import NotFound from '@pages/error/NotFound';
import { useAnalytics } from 'src/hoc/useAnalytics';

const ToolDetail = () => {
  const { toolParam } = useParams<{ toolParam: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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
  const { trackEvent } = useAnalytics();

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
    const categories = queryClient.getQueryData<CategorList[]>(['category']);

    const matchedCategory = categories?.find((category) => category.koreanName === data.category);
    const categoryName = matchedCategory ? matchedCategory.name : '';

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '툴 목록',
          item: 'https://www.daruda.site/toollist',
        },
        ...(categoryName
          ? [
              {
                '@type': 'ListItem',
                position: 2,
                name: data.category,
                item: `https://www.daruda.site/toollist?category=${categoryName}`,
              },
            ]
          : []),
        {
          '@type': 'ListItem',
          position: categoryName ? 3 : 2,
          name: data.toolMainName,
          item: `https://www.daruda.site/toollist/${toolParam}`,
        },
      ],
    };

    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: data.toolMainName,
      description: data.description,
      image: data.toolLogo,
      url: `https://www.daruda.site/toollist/${toolParam}`,
      applicationCategory: data.category,
      keywords: data.keywords?.join(','),
    };

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
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        </Helmet>
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
                    trackEvent('Tool_Click', { type: 'Community', tool: data.toolMainName });
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
