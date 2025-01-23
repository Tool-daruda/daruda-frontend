/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const colors = {
  iris1: '#4D4ECD',
  iris1_hover: '#595AE8',
  iris1_click: '#4243B6',
  iris2: '#B9B9F6',
  iris2_hover: 'rgba(185, 185, 246, 0.40)',
  orange1: '#F77B1B',
  orange2: '#FFD3B1',
  sys_red: '#F21C00',
  sys_green: '#40C927',
  black: '#212121',
  black_toast: ' rgba(33, 33, 33, 0.40)',
  black2_hover: 'rgba(70, 70, 70, 0.8)',
  white1: '#FFFFFF',
  white2: '#F5F5F5',
  white1_hover: 'rgba(255, 255, 255, 0.4)',
  gray1: '#565959',
  gray2: '#848688',
  gray3: '#ACACAC',
  gray4: '#CCCCCC',
  gray5: '#EBEBEB',
  gray6: '#F0F2F2',

  linear1: 'linear-gradient(270deg, #FFF 77.78%, rgba(255, 255, 255, 0.00) 100%)',
  shadow1: 'rgba(211, 211, 211, 0.63)',

  kakao_yellow: ' #FEE500',
  kakao_black: 'rgba(0, 0, 0, 0.85) ',
};

const fonts = {
  title_48_b: css`
    font-size: 4.8rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 6.8rem;
  `,
  title_40_b: css`
    font-size: 4rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 6rem;
  `,
  head_32_b: css`
    font-size: 3.2rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 4.8rem;
  `,
  head_28_b_48: css`
    font-size: 2.8rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 4.8rem;
  `,
  head_28_b: css`
    font-size: 2.8rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 3.2rem;
  `,
  head_28_m: css`
    font-size: 2.8rem;
    font-family: 'AppleSDGothicNeoM00', sans-serif;
    line-height: 5.6rem;
  `,
  body_24_b: css`
    font-size: 2.4rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 3.2rem;
  `,
  body_24_sb: css`
    font-size: 2.4rem;
    font-family: 'AppleSDGothicNeoSB00', sans-serif;
    line-height: 3.2rem;
  `,
  body_20_b: css`
    font-size: 2rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 2.4rem;
  `,
  body_20_m: css`
    font-size: 2rem;
    font-family: 'AppleSDGothicNeoM00', sans-serif;
    line-height: 4rem;
  `,
  body_20_m_34: css`
    font-size: 2rem;
    font-family: 'AppleSDGothicNeoM00', sans-serif;
    line-height: 3.4rem;
  `,
  body_20_r: css`
    font-size: 2rem;
    font-family: 'AppleSDGothicNeoR00', sans-serif;
    line-height: 4rem;
  `,
  body_16_b_1: css`
    font-size: 1.6rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 3.2rem;
  `,
  body_16_b_2: css`
    font-size: 1.6rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 2rem;
  `,
  body_16_b_3: css`
    font-size: 1.6rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 1.6rem;
  `,
  body_16_m: css`
    font-size: 1.6rem;
    font-family: 'AppleSDGothicNeoM00', sans-serif;
    line-height: 2.8rem;
  `,
  body_16_r: css`
    font-size: 1.6rem;
    font-family: 'AppleSDGothicNeoR00', sans-serif;
    line-height: 2rem;
  `,
  caption_14_b: css`
    font-size: 1.4rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 2rem;
  `,
  caption_14_m: css`
    font-size: 1.4rem;
    font-family: 'AppleSDGothicNeoM00', sans-serif;
    line-height: 2rem;
  `,
  caption_12_b: css`
    font-size: 1.2rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 1.8rem;
  `,
  caption_12_m: css`
    font-size: 1.2rem;
    font-family: 'AppleSDGothicNeoM00', sans-serif;
    line-height: 1.8rem;
  `,
  caption_12_r: css`
    font-size: 1.2rem;
    font-family: 'AppleSDGothicNeoR00', sans-serif;
    line-height: 1.6rem;
  `,
  caption_10_m: css`
    font-size: 1rem;
    font-family: 'AppleSDGothicNeoM00', sans-serif;
    line-height: 1.8rem;
  `,
  card_36_B: css`
    font-size: 3.6rem;
    font-family: SFProDisplaybold, sans-serif;
    line-height: 3.8rem;
  `,
  card_32_B: css`
    font-size: 3.2rem;
    font-family: SFProDisplaybold, sans-serif;
    line-height: 3.8rem;
  `,
  card_18_B_32: css`
    font-size: 1.8rem;
    font-family: SFProDisplaybold, sans-serif;
    line-height: 3.2rem;
  `,
  card_18_B_20: css`
    font-size: 1.8rem;
    font-family: SFProDisplaybold, sans-serif;
    line-height: 2rem;
  `,
  // Todo: 디자인 폰트 작업 다 끝나면 그때 수정하기 -> 일단 임의로 만든 값
  caption_8_b: css`
    font-size: 0.8rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 1.1rem;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;

export type ColorType = typeof theme.colors;
export type FontType = typeof theme.fonts;
