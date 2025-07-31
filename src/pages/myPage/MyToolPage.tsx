import styled from '@emotion/styled';

import MyToolCard from './components/toolCard/MyToolCard';
import { useToolScrapMutation } from '@apis/tool';
import { useFavoriteToolQuery } from '@apis/user';
import { ImgPopupNonebookmarkScraptool } from '@assets/svgs';
import Spacing from '@components/spacing/Spacing';
import Toast from '@components/toast/Toast';
import { useToastOpen } from '@hooks/index';

const MyToolPage = () => {
  const { data: favoriteToolData } = useFavoriteToolQuery();
  const { mutateAsync: scrapMutate } = useToolScrapMutation(undefined, undefined, undefined, true);
  const { isToastOpen, handleModalOpen: handleToastOpen } = useToastOpen();

  if (favoriteToolData) {
    return (
      <S.MyToolWrapper>
        {favoriteToolData.toolList?.length > 0 ? (
          <S.MyToolContainer>
            {favoriteToolData.toolList?.map((tool) => (
              <MyToolCard
                key={tool.toolId}
                toolId={tool.toolId}
                toolLogo={tool.toolLogo}
                toolNameMain={tool.toolName}
                keyWordList={tool.keywords}
                isScrapped={tool.isScraped}
                onClick={() => {
                  scrapMutate(tool.toolId);
                  handleToastOpen();
                }}
              />
            ))}
          </S.MyToolContainer>
        ) : (
          <S.NonTool>
            <ImgPopupNonebookmarkScraptool />
            <Spacing size="4.2" />
            <p>관심있는 툴이 없어요</p>
            <Spacing size="1" />
            <p>북마크를 통해 관심있는 툴을 저장해보세요</p>
          </S.NonTool>
        )}
        {isToastOpen && (
          <Toast isVisible={isToastOpen} isWarning={false}>
            북마크가 취소되었어요.
          </Toast>
        )}
      </S.MyToolWrapper>
    );
  }
};

export default MyToolPage;

const S = {
  MyToolWrapper: styled.div`
    width: calc(91.3rem - 1.7rem);
    height: 54.8rem;
    padding-left: 3.6rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.white1};
      border: 4px solid ${({ theme }) => theme.colors.gray4};
      border-radius: 0.4rem;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.white1};
    }

    &::-webkit-scrollbar-button:vertical:start:decrement,
    &::-webkit-scrollbar-button:vertical:start:increment,
    &::-webkit-scrollbar-button:vertical:end:decrement {
      display: block;
      height: 0.6rem;
    }
  `,
  MyToolContainer: styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
    width: 81.3rem;
    margin: 1.2rem 0;
  `,
  NonTool: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: inheriht;
    margin-left: 1rem;

    transform: translate(-50%, -50%);

    & p:first-of-type {
      color: ${({ theme }) => theme.colors.gray1};

      ${({ theme }) => theme.fonts.body_20_b};
    }

    & p:last-of-type {
      color: ${({ theme }) => theme.colors.gray2};

      ${({ theme }) => theme.fonts.caption_14_m};
    }
  `,
};
