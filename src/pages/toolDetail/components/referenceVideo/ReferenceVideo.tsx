import { useToolData } from '@apis/tool/getToolData';
import { forwardRef } from 'react';

import * as S from './ReferenceVideo.styled';
import VideoCard from './videoCard/VideoCard';

interface ReferenceVideoProps {
  toolId: number;
}

const ReferenceVideo = forwardRef<HTMLDivElement, ReferenceVideoProps>(({ toolId, ...props }, ref) => {
  // 전달받은 toolId 사용
  const { data } = useToolData(toolId);
  const videos = data?.videos || [];

  if (videos.length === 0) {
    return <S.NullText>준비된 영상이 없습니다.</S.NullText>;
  }

  return (
    <div ref={ref} {...props}>
      <S.ReferenceVideoWrapper>
        <h1>참고하면 좋은 영상</h1>
        <S.ReferenceVideoContainer count={videos.length}>
          {videos.map((videoUrl, index) => (
            <VideoCard key={index} video={videoUrl} /> // VideoCard에 각 URL 전달
          ))}
        </S.ReferenceVideoContainer>
      </S.ReferenceVideoWrapper>
      <S.DividingLine />
    </div>
  );
});

ReferenceVideo.displayName = 'ReferenceVideo';

export default ReferenceVideo;
