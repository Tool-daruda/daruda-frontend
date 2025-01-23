import styled from '@emotion/styled';
import SvgEllipse5276 from '@pages/login/assets/Ellipse5276';

export const ButtonWrapper = styled.button<{ isActive: boolean }>`
  display: flex;
  gap: 3.6rem;
  align-items: center;
  padding: ${({ isActive }) => (isActive ? `1.2rem 1.4rem` : `1.3rem 1.5rem`)};

  color: ${({ isActive, theme }) => (isActive ? theme.colors.iris1 : theme.colors.gray1)};

  background-color: ${({ theme }) => theme.colors.white1};
  border: ${({ isActive, theme }) =>
    isActive ? `0.2rem solid ${theme.colors.iris1}` : `0.1rem solid ${theme.colors.gray4}`};
  border-radius: 1.2rem;
`;

export const Label = styled.span`
  display: flex;
  width: 4.8rem;
  ${({ theme }) => theme.fonts.caption_14_m};
`;

export const StyledIcon = styled(SvgEllipse5276)<{ $isSelected: boolean }>`
  fill: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.iris1 : theme.colors.white2)};
  stroke: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.iris2 : theme.colors.gray4)};
`;
