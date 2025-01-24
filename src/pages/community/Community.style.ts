import styled from '@emotion/styled';

export const CommunityWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.white2};
`;

export const CommunityContainer = styled.section`
  display: flex;
  gap: 1.4rem;
  align-items: flex-start;
  justify-content: center;
  height: max-content;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 76.6rem;
  margin: 2.4rem 0;
`;

export const NonTool = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3.6rem;

  & p:first-of-type {
    color: ${({ theme }) => theme.colors.gray1};

    ${({ theme }) => theme.fonts.body_20_b};
  }

  & p:last-of-type {
    color: ${({ theme }) => theme.colors.gray2};

    ${({ theme }) => theme.fonts.caption_14_m};
  }
`;

export const FollowingBtns = styled.div`
  position: fixed;
  right: 8.7rem;
  bottom: 8rem;
  z-index: 999;
  display: inline-flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const TopBtn = styled.button`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  width: 5.6rem;
  height: 5.6rem;

  background: ${({ theme }) => theme.colors.black_toast};
  box-shadow: 0 0 12px 0 ${({ theme }) => theme.colors.shadow1};
  border-radius: 3.2rem;
`;

export const LoadingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
