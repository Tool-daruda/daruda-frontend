import { IcSearchGray32 } from '@assets/svgs';
import styled from '@emotion/styled';

interface StickyProps {
  isSticky: boolean;
}

export const SearchBarContainer = styled.div<StickyProps>`
  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'relative')};
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.8rem;

  background: ${({ theme }) => theme.colors.white1};

  transition: all 0.4s ease-in-out;

  ${({ isSticky, theme }) =>
    isSticky
      ? `
      top: 7.125rem;
      z-index: 20;
      width: 117.2rem;
      padding: 1.9rem 0;
      box-shadow: 0 0 1.2rem 0 ${theme.colors.shadow1};     
      border-radius: 0 0 1.6rem 1.6rem;
    `
      : `
      top: 0;
      z-index: 1;
      width: 104.6rem;
      height: 32rem;
      margin-top: 2.8rem;
      padding: 3.2rem 13.3rem 3.6rem;
      border-bottom: 2px solid ${theme.colors.gray6};
      border-radius: 1.6rem;
    `}
`;
export const SearchChipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchChip = styled.div<StickyProps>`
  display: flex;
  flex-wrap: ${({ isSticky }) => (isSticky ? 'nowrap' : 'wrap')};
  gap: 1.2rem;
  place-content: center ${({ isSticky }) => (isSticky ? 'flex-start' : 'center')};
  align-items: center;
  width: ${({ isSticky }) => (isSticky ? '80.3rem' : '74.4rem')};
  overflow-x: hidden;

  white-space: ${({ isSticky }) => (isSticky ? 'nowrap' : 'normal')};
`;

export const ScrollButtonLeft = styled.button`
  position: absolute;
  left: -1rem;
  z-index: 10;
  width: 5.4rem;
  height: 9rem;

  cursor: pointer;
`;

export const ScrollButtonRight = styled.button`
  position: absolute;
  right: 0;
  z-index: 10;
  width: 5.4rem;
  height: 9rem;

  cursor: pointer;
  border: none;
`;

export const SearchBarBox = styled.div<StickyProps>`
  display: flex;
  flex-direction: ${({ isSticky }) => (isSticky ? 'row' : 'column')};
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const SearchBarTitle = styled.p`
  ${({ theme }) => theme.fonts.head_32_b};
  color: ${({ theme }) => theme.colors.black};
  font-size: 3.2rem;
`;

export const SearchBar = styled.div<StickyProps>`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  width: ${({ isSticky }) => (isSticky ? '29.3rem' : '78rem')};
  height: ${({ isSticky }) => (isSticky ? '5.2rem' : '6.4rem')};

  background: ${({ theme }) => theme.colors.white2};
  border: 1.5px solid ${({ theme }) => theme.colors.gray5};
  border-radius: 6rem;
  ${({ theme }) => theme.fonts.body_16_m};
`;

export const IcSearchGray = styled(IcSearchGray32)`
  margin-left: 2.5rem;
`;

export const Search = styled.input<StickyProps>`
  width: ${({ isSticky }) => (isSticky ? '19.5rem' : '78rem')};
  margin-right: 2.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.body_16_m};
  }
`;
