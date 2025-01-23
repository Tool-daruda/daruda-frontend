import styled from '@emotion/styled';

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  padding: 1.2rem 2.8rem;

  background-color: ${({ theme }) => theme.colors.white1};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white2};
  }
`;

export const TopContainer = styled.section`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  width: 9.8rem;
  height: 5.6rem;
`;

export const CardLogo = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;

  border-radius: 1.2rem;
`;

export const CardTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 9.8rem;
  height: 3.2rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_16_b_3};
  word-break: break-word;
`;

export const PlanBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  span {
    color: ${({ theme }) => theme.colors.orange1};
    ${({ theme }) => theme.fonts.caption_12_b};
  }
`;

export const KeyWordCardBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-content: center;
`;

export const KeyWordCard = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.7rem;

  color: ${({ theme }) => theme.colors.gray2};

  background-color: ${({ theme }) => theme.colors.white2};
  ${({ theme }) => theme.fonts.caption_12_m};
  border-radius: 0.6rem;

  ${CardWrapper}:hover & {
    background-color: ${({ theme }) => theme.colors.white1};
  }
`;
