import styled from '@emotion/styled';

export const PlanTab = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.2rem;

  ${({ theme }) => theme.fonts.body_16_b_2};
`;

export const PlanBtn = styled.button<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.iris1 : theme.colors.gray2)};
  ${({ $isSelected, theme }) => ($isSelected ? theme.fonts.body_16_b_2 : theme.fonts.body_16_r)};
`;

export const PlanWrapper = styled.section`
  display: flex;
  gap: 1rem;
`;
