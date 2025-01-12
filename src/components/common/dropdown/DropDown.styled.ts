import styled from '@emotion/styled';

export const DropDownContainer = styled.section<{ $position: 'start' | 'end' }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: ${({ $position }) => $position};
`;

export const DropDownToggleBtn = styled.div`
  cursor: pointer;

  svg {
    vertical-align: middle;
  }
`;

export const DropDownWrapper = styled.ul`
  position: abolsute;
  z-index: 1;
  width: min-content;

  background: ${({ theme }) => theme.colors.white1};
  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 1.6rem;
`;

export const DropDownItem = styled.li<{ $status?: string }>`
  padding: 1.4rem 4.6rem;

  color: ${({ theme, $status }) => ($status === 'danger' ? theme.colors.sys_red : theme.colors.gray1)};
  ${({ theme }) => theme.fonts.caption_14_m};
  white-space: nowrap;

  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
  }
`;
