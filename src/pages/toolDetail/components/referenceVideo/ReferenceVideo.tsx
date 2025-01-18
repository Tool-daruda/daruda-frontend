import * as S from './ReferenceVideo.styled';
import VideoCard from './videoCard/VideoCard';

const ReferenceVideo = () => {
  return (
    <>
      <S.ReferenceVideoWrapper>
        <h1>참고하면 좋은 영상</h1>
        <S.ReferenceVideoContainer>
          <VideoCard video={'https://youtu.be/IWPjpE8shZw?si=kjliLJFS6p1mEmvg'} />
          <VideoCard video={'https://youtu.be/IWPjpE8shZw?si=kjliLJFS6p1mEmvg'} />
        </S.ReferenceVideoContainer>
      </S.ReferenceVideoWrapper>
      <S.DividingLine />
    </>
  );
};

export default ReferenceVideo;
