import styled from '@emotion/styled';

import { IcArrowDownBlack32 } from '@assets/svgs';
import theme from '@styles/theme';

const S = {
  Layout: styled.section`
    display: inline-flex;
    gap: 1rem;
    align-items: center;
    padding: 3.2rem 2.8rem;

    background: ${theme.colors.white1};
    border-radius: 1.6rem;
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: flex-start;
    width: 424px;
  `,

  Header: styled.header`
    display: flex;
    gap: 17rem;
    align-items: center;
    align-self: stretch;
    justify-content: flex-end;

    & h1 {
      ${theme.fonts.body_24_b}
      color: ${theme.colors.black};
      text-align: center;
    }
  `,

  MainContainer: styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: flex-start;
    align-self: stretch;
  `,

  TitleInputContainer: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    align-self: stretch;
    padding: 1.2rem 0;

    border-top: 1px solid ${theme.colors.gray5};
    border-bottom: 1px solid ${theme.colors.gray5};

    & label {
      ${theme.fonts.body_16_m}
      color: ${theme.colors.gray2};
    }

    & input {
      ${theme.fonts.body_16_m}
      color: ${theme.colors.gray1};
    }
  `,

  SelectionContainer: styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    align-items: flex-start;
    align-self: stretch;

    & h2 {
      ${theme.fonts.body_16_b_1}
      color: ${theme.colors.gray1};
    }
  `,

  SelectionItem: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-start;
    align-self: stretch;
  `,

  DropdownWrapper: styled.div`
    position: relative;
    width: 100%;
  `,

  DropdownBox: styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2rem;

    ${theme.fonts.caption_14_m}
    color: ${theme.colors.gray3};

    background: ${theme.colors.gray6};
    border: 1px solid ${theme.colors.gray5};
    border-radius: 8px;
  `,

  DropdownArrowBtn: styled(IcArrowDownBlack32)<{ isOpen: boolean }>`
    transform: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};

    transition: transform 0.2s ease;
  `,

  OptionList: styled.ul`
    position: absolute;
    top: 7.4rem;
    right: 0;
    left: 0;
    z-index: 10;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: center;
    padding: 1.2rem 2rem;

    background: ${theme.colors.gray6};
    border: 1px solid ${theme.colors.gray6};
    border-radius: 0.8rem;
  `,

  OptionItem: styled.li`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 4.4rem;
    padding: 1.2rem 2rem;

    color: ${theme.colors.gray1};

    cursor: pointer;
    ${theme.fonts.caption_14_m}
    border-radius: 8px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white1};
    }
  `,

  OptionalInput: styled.textarea`
    width: 100%;
    min-height: 12rem;
    padding: 2rem;

    border: 1px solid ${theme.colors.gray4};
    border-radius: 1.2rem;

    ${theme.fonts.caption_14_m}
    resize: none;

    &::placeholder {
      ${theme.fonts.caption_14_m}
      color: ${theme.colors.gray3};
    }
  `,

  CountContent: styled.span`
    position: absolute;
    right: 2rem;
    bottom: 1rem;

    ${theme.fonts.caption_14_m}
    color: ${theme.colors.gray3};
  `,

  ButtonContainer: styled.section`
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `,
};

export default S;
