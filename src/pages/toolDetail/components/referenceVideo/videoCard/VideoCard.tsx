import { useState } from 'react';
import ReactPlayer from 'react-player';

import * as S from './VideoCard.styled';
import { IcPlayWhite40 } from '@assets/svgs';
import { useAnalytics } from 'src/hoc/useAnalytics';

const VideoCard = ({
  video,
  alternate,
  toolName,
}: {
  video: string | null;
  alternate: string;
  toolName?: string | null;
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { trackEvent } = useAnalytics();

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
          {!isPlay && (
            <IcPlayWhite40
              onClick={() => {
                trackEvent('Tool_Click', { type: 'Video', tool: toolName });
                setIsPlay(true);
              }}
            />
          )}
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
