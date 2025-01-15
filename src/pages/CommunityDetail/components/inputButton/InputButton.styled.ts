import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 10px 18px;

  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 1.6rem;
  ${({ theme }) => theme.fonts.body_16_m};

  &:hover span svg path,
  &:hover span svg rect {
    stroke: ${({ theme }) => theme.colors.white1};
  }

  &:hover,
  &:hover label p {
    color: ${({ theme }) => theme.colors.white1};

    background-color: ${({ theme }) => theme.colors.iris1};
  }

  &:disabled,
  &:disabled label p {
    color: ${({ theme }) => theme.colors.gray2};

    background-color: ${({ theme }) => theme.colors.white1};
  }

  input[type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    cursor: pointer;
    opacity: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.gray1};

  &:hover span {
    color: ${({ theme }) => theme.colors.white1};
  }

  &:disabled span {
    color: ${({ theme }) => theme.colors.gray2};

    background-color: ${({ theme }) => theme.colors.white1};
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
`;
