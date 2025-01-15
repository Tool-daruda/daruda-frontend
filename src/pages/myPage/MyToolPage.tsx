import Spacing from '@components/spacing/Spacing';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import MyToolCard from './components/toolCard/MyToolCard';
import { FAVORITE_TOOLS } from './mocks/favoriteToolList';

interface keyWord {
  keyWordId: number;
  keyWordName: string;
}

interface Tool {
  toolId: number;
  toolLogo: string;
  toolNameMain: string;
  keyWordList: keyWord[];
}

const MyToolPage = () => {
  const [toolList, setToolList] = useState<Tool[]>(FAVORITE_TOOLS);

  // 추후에 API 연결을 위해 useState를 사용하기 위해 set함수를 임의로 넣었습니다!!!
  // API 연결할 때 삭제하겠습니다.
  useEffect(() => {
    setToolList((prevToolList) => [...prevToolList]);
  }, []);

  return (
    <S.MyToolWrapper>
      {toolList.length > 0 ? (
        <S.MyToolContainer>
          {toolList.map((tool) => (
            <MyToolCard
              key={tool.toolId}
              toolLogo={tool.toolLogo}
              toolNameMain={tool.toolNameMain}
              keyWordList={tool.keyWordList}
            />
          ))}
        </S.MyToolContainer>
      ) : (
        <S.NonTool>
          {/* TODO: 이미지 갈아끼우기 */}
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfNjEg/MDAxNTcwNzg1ODM3Nzc0.zxDXm20VlPdQv8GQi9LWOdPwkqoBdiEmf8aBTWTsPF8g.FqMQTiF6ufydkQxrLBgET3kNYAyyKGJTWTyi1qd1-_Ag.PNG.kkson50/sample_images_01.png?type=w800"
            alt=""
          />
          <Spacing size="4.2" />
          <p>관심있는 툴이 없어요</p>
          <Spacing size="1" />
          <p>북마크를 통해 관심있는 툴을 저장해보세요</p>
        </S.NonTool>
      )}
    </S.MyToolWrapper>
  );
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inheriht;
    margin-left: -3.6rem;

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
