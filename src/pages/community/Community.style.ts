import styled from '@emotion/styled';

export const CommunityWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white2};
`;

export const CommunityContainer = styled.section`
  display: inline-flex;
  gap: 1.4rem;
  align-items: flex-start;
  justify-content: center;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 76.6rem;
  margin: 2.4rem 0;
`;

export const FollowingBtns = styled.div`
  position: fixed;
  top: 60.9rem;
  right: 8.7rem;
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
