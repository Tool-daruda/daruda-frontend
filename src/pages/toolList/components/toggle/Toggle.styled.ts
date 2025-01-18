import styled from '@emotion/styled';

interface ToggleProps {
  isOn: boolean;
}

export const ToggleWrapper = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;

  ${({ theme }) => theme.fonts.body_16_m};
  color: ${({ theme }) => theme.colors.gray1};
`;
export const ToggleContainer = styled.div<ToggleProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 5.6rem;
  height: 3rem;

  background-color: ${(props) => (props.isOn ? props.theme.colors.iris1 : props.theme.colors.gray4)};
  cursor: pointer;
  border-radius: 1.5rem;

  transition: background-color 0.3s ease-in-out;
`;

export const ToggleCircle = styled.div<ToggleProps>`
  position: absolute;
  top: 0.28rem;
  left: ${(props) => (props.isOn ? '0.4rem' : '2.7rem')};
  width: 2.4rem;
  height: 2.4rem;

  background-color: white;
  border-radius: 50%;

  transition: left 0.3s ease-in-out;
`;
