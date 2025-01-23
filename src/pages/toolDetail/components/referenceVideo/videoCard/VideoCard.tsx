import { IcPlayWhite40 } from '@assets/svgs';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import * as S from './VideoCard.styled';

const VideoCard = ({ video, alternate }: { video: string; alternate: string }) => {
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
          <YouTubeThumbnail videoUrl={video} alternate={alternate} />
          {!isPlay && <IcPlayWhite40 onClick={() => setIsPlay(true)} />}
        </S.ThumbnailWrapper>
      ) : null}
    </S.VideoWrapper>
  );
};

export default VideoCard;

const getYouTubeThumbnail = async (url: string) => {
  const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);

  if (!videoIdMatch) return null;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoIdMatch[1]}/maxresdefault.jpg`;

  const response = await fetch(thumbnailUrl, { method: 'HEAD' });
  if (response.ok) {
    return thumbnailUrl;
  } else {
    return null;
  }
};

const YouTubeThumbnail = ({ videoUrl, alternate }: { videoUrl: string; alternate: string }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  useEffect(() => {
    getYouTubeThumbnail(videoUrl).then((url) => {
      setThumbnailUrl(url);
    });
  }, [videoUrl]);

  return <img src={thumbnailUrl ?? alternate} alt="YouTube Thumbnail" />;
};
