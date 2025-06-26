import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  width: 104.6rem;
  margin: 2.4rem;
  padding: 4rem 9.3rem;

  background: ${({ theme }) => theme.colors.white1};
  border-radius: 16px;
`;

export const SearchResult = styled.section`
  width: 100%;

  & > h1 {
    ${({ theme }) => theme.fonts.body_24_b};
    margin-bottom: 2.8rem;
  }

  h2 {
    ${({ theme }) => theme.fonts.body_20_b};
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ToolCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 42rem;
`;

export const Button = styled.button`
  width: fit-content;

  ${({ theme }) => theme.fonts.body_16_m};
  color: ${({ theme }) => theme.colors.iris1};
`;

export const Toggle = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ theme }) => theme.fonts.body_16_r};
  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;

  cursor: pointer;

  svg {
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};

    transition: 0.5s;
  }

  path {
    fill: ${({ theme }) => theme.colors.gray2};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.2rem;

  background: ${({ theme }) => theme.colors.gray5};
`;
