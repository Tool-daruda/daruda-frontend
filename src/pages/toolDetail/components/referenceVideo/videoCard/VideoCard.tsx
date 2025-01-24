import { IcPlayWhite40 } from '@assets/svgs';
import { useState } from 'react';
import ReactPlayer from 'react-player';

import * as S from './VideoCard.styled';

const VideoCard = ({ video, alternate }: { video: string | null; alternate: string }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isReady, setIsReady] = useState(false);

  if (!video) {
    return (
      <S.NullTextWrapper>
        <S.NullText>준비된 영상이 없습니다.</S.NullText>
      </S.NullTextWrapper>
    );
  }

  return (
    <S.VideoWrapper $isPlay={isPlay} $isReady={isReady}>
      <ReactPlayer
        url={video}
        className="react-player"
        width="100%"
        height="100%"
        playing={isPlay}
        controls
        onReady={() => setIsReady(true)}
      />

      {!isPlay || !isReady ? (
        <S.ThumbnailWrapper>
          <YouTubeThumbnail videoUrl={video} alternate={alternate} />
          {!isPlay && <IcPlayWhite40 onClick={() => setIsPlay(true)} />}
        </S.ThumbnailWrapper>
      ) : null}
    </S.VideoWrapper>
  );
};

export default VideoCard;

const getYouTubeThumbnail = (videoUrl: string): string | null => {
  const videoIdMatch = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  if (!videoIdMatch) return null;

  const videoId = videoIdMatch[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // 항상 hqdefault 사용
};

const YouTubeThumbnail = ({ videoUrl, alternate }: { videoUrl: string; alternate: string }) => {
  const thumbnailUrl = getYouTubeThumbnail(videoUrl) ?? alternate;

  return <img src={thumbnailUrl} alt="YouTube Thumbnail" />;
};
