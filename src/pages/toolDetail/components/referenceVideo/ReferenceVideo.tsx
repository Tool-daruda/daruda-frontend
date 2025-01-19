import { forwardRef } from 'react';

import * as S from './ReferenceVideo.styled';
import VideoCard from './videoCard/VideoCard';

const ReferenceVideo = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <S.ReferenceVideoWrapper>
        <h1>참고하면 좋은 영상</h1>
        <S.ReferenceVideoContainer>
          <VideoCard video={'https://youtu.be/IWPjpE8shZw?si=kjliLJFS6p1mEmvg'} />
          <VideoCard video={'https://youtu.be/IWPjpE8shZw?si=kjliLJFS6p1mEmvg'} />
        </S.ReferenceVideoContainer>
      </S.ReferenceVideoWrapper>
      <S.DividingLine />
    </div>
  );
});

ReferenceVideo.displayName = 'ReferenceVideo';

export default ReferenceVideo;
