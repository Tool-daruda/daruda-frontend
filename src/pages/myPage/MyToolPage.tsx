import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import MyToolCard from './components/toolCard/MyToolCard';
import { favoriteToolList } from './constants/favoriteToolList';

const MyToolPage = () => {
  const [toolList, setToolList] = useState(favoriteToolList);

  // 추후에 API 연결을 위해 useState를 사용하기 위해 set함수를 임의로 넣었습니다!!!
  // API 연결할 때 삭제하겠습니다.
  useEffect(() => {
    setToolList((prevToolList) => [...prevToolList]);
  }, []);

  return (
    <S.MyToolWrapper>
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
    </S.MyToolWrapper>
  );
};

export default MyToolPage;

// MyPage 스타일
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
};
