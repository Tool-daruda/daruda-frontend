import { forwardRef } from 'react';

import * as S from './ReferenceVideo.styled';
import VideoCard from './videoCard/VideoCard';
import { useToolDetailQuery } from '@apis/tool';

interface ReferenceVideoProps {
  toolId: number;
  alternate: string;
}

const ReferenceVideo = forwardRef<HTMLDivElement, ReferenceVideoProps>(({ toolId, alternate, ...props }, ref) => {
  // 전달받은 toolId 사용

  const { data } = useToolDetailQuery(toolId);
  const videos = data?.videos || [];

  return (
    <div ref={ref} {...props}>
      <S.ReferenceVideoWrapper aria-labelledby="recommended-videos-heading">
        <h2 id="recommended-videos-heading">참고하면 좋은 영상</h2>

        <S.ReferenceVideoContainer count={videos.length}>
          {videos.length > 0 ? (
            videos.map((videoUrl, index) => (
              <VideoCard key={index} video={videoUrl} alternate={alternate} toolName={data?.toolMainName} />
            ))
          ) : (
            <VideoCard video={null} alternate={alternate} />
          )}
        </S.ReferenceVideoContainer>
      </S.ReferenceVideoWrapper>
      <S.DividingLine />
    </div>
  );
});

ReferenceVideo.displayName = 'ReferenceVideo';

export default ReferenceVideo;
