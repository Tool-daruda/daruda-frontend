import { IcChevronDownBlack16 } from '@assets/svgs';
import styled from '@emotion/styled';

export const ToggleWrapper = styled.div`
  position: relative;
  width: 22.4rem;
`;

export const ToggleBtn = styled.button<{ $isSingleLine: boolean; $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  padding: ${({ $isSingleLine }) => ($isSingleLine ? '1rem 1.6rem' : '1.1rem 1.6rem 0.8rem')};

  color: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.iris1 : theme.colors.gray1)};
  text-align: left;

  background: ${({ theme }) => theme.colors.white1};
  border: 0.1rem solid ${({ $isOpen, theme }) => ($isOpen ? theme.colors.iris1 : theme.colors.gray5)};
  border-radius: 0.6rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 0.4rem;

    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.caption_10_m};
  }

  .won-symbol {
    margin-left: 0.1rem;

    color: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.iris1 : theme.colors.gray1)};
  }

  path {
    fill: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.iris1 : theme.colors.gray1)};
  }
`;

export const ToggleIcon = styled(IcChevronDownBlack16)<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'none')};

  transition: all 0.3s;

  fill: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.iris1 : theme.colors.gray1)};
`;

export const ToggleContent = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  padding: ${({ $isOpen }) => ($isOpen ? '1.6rem 1.2rem' : '0 1.2rem')};

  color: ${({ theme }) => theme.colors.gray1};

  background: ${({ theme }) => theme.colors.white1};
  box-shadow: 0 0.4rem 0.6rem 0 rgb(204 204 204 / 25%);
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: 0.6rem;

  transition: all 0.2s ease-in-out;

  ${({ theme }) => theme.fonts.caption_12_r};

  li {
    margin-left: 1.2rem;

    list-style-type: disc;
  }
`;
