import { IcPlayWhite40 } from '@assets/svgs';
import { useState } from 'react';
import ReactPlayer from 'react-player';

import * as S from './VideoCard.styled';

const VideoCard = ({ video }: { video: string }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isReady, setIsReady] = useState(false);

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
          <YouTubeThumbnail videoUrl={video} />
          {!isPlay && <IcPlayWhite40 onClick={() => setIsPlay(true)} />}
        </S.ThumbnailWrapper>
      ) : null}
    </S.VideoWrapper>
  );
};

export default VideoCard;

const getYouTubeThumbnail = (url: string) => {
  const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return videoIdMatch ? `https://img.youtube.com/vi/${videoIdMatch[1]}/maxresdefault.jpg` : null;
};

const YouTubeThumbnail = ({ videoUrl }: { videoUrl: string }) => {
  const thumbnailUrl = getYouTubeThumbnail(videoUrl);

  if (!thumbnailUrl) {
    return <p>Invalid YouTube URL</p>;
  }

  return <img src={thumbnailUrl} alt="YouTube Thumbnail" />;
};
