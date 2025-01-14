import SvgBtnWritingChipxIcon from '@assets/svgs/BtnWritingChipxIcon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { chipColors } from './chipColors';

export const ChipRoundContainer = styled.button<{
  $stroke?: boolean;
  $size?: 'xsmall' | 'small' | 'medium' | 'large';
  $active?: boolean;
}>`
  display: grid;
  place-items: center;

  ${({ theme, $size }) => {
    switch ($size) {
      case 'large':
        // height 큰 버전
        return css`
          height: 2.6rem;
          padding: 0.4rem 1rem;

          border-radius: 22px;
          ${theme.fonts.caption_12_b};
        `;
      default:
        // height 작은 버전
        return css`
          height: 1.8rem;
          padding: 0.4rem 0.7rem;

          border-radius: 16px;
          ${theme.fonts.caption_8_b};
        `;
    }
  }}

  color: ${({ theme, $active }) => ($active ? theme.colors[chipColors.roundChip.color] : theme.colors.gray2)};

  background-color: ${({ theme, $active }) =>
    $active ? theme.colors[chipColors.roundChip.backgroundColor] : theme.colors.white1};
  cursor: pointer;
  border: 1px solid ${({ theme, $stroke }) => ($stroke ? theme.colors.gray4 : 'transparent')};
`;

export const ChipRectContainer = styled.button<{
  $stroke?: boolean;
  $size?: 'xsmall' | 'small' | 'medium' | 'large';
  $active?: boolean;
}>`
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  gap: 0.6rem;

  ${({ $size, theme, $active }) => {
    switch ($size) {
      case 'xsmall':
        // tool card keyword Chip
        return css`
          height: 2.6rem;
          padding: 0.4rem 1rem;

          ${theme.fonts.caption_12_b};
          color: ${$active ? theme.colors[chipColors.roundChip.color] : theme.colors.gray2};

          background-color: ${$active ? theme.colors[chipColors.roundChip.backgroundColor] : theme.colors.white1};
        `;
      case 'small':
        // 카테고리 Chip (아이콘 X)
        return css`
          height: 3.6rem;
          padding: 0.2rem 1.4rem;

          color: ${$active ? theme.colors[chipColors.categoryChip.color] : theme.colors.gray2};

          background-color: ${$active ? theme.colors[chipColors.categoryChip.backgroundColor] : theme.colors.white1};

          ${theme.fonts.body_16_b_1};
        `;
      case 'medium':
        // tool Chip
        return css`
          height: 3.6rem;
          padding: 0.8rem 1.2rem 0.8rem 1rem;

          color: ${theme.colors.black};

          background-color: ${theme.colors.white1};

          ${theme.fonts.caption_14_m};
        `;
      case 'large':
        // height 큰 버전
        return css`
          grid-auto-flow: row;
          height: 6.8rem;
          padding: 0 1.4rem;
          place-content: center center;

          color: ${$active ? theme.colors[chipColors.categoryChip.color] : theme.colors.gray2};

          background-color: ${$active ? theme.colors[chipColors.categoryChip.backgroundColor] : theme.colors.white1};
          ${theme.fonts.body_16_b_1};
        `;
      default:
        return css`
          height: 3.6rem;
          padding: 0.8rem 1.2rem 0.8rem 1rem;

          color: ${theme.colors.black};

          background-color: ${theme.colors.white1};

          ${theme.fonts.caption_14_m};
        `;
    }
  }}
  white-space: nowrap;

  cursor: pointer;
  border: 1px solid ${({ theme, $stroke }) => ($stroke ? theme.colors.gray4 : 'transparent')};
  border-radius: 8px;
`;

export const ChipIcon = styled.img<{ $width?: number; $height?: number }>`
  width: ${({ $width }) => ($width ? `${$width}rem` : '2rem')};
  height: ${({ $height }) => ($height ? `${$height}rem` : '2rem')};

  border-radius: 4px;
`;

export const CloseIcon = styled(SvgBtnWritingChipxIcon)<{ $width?: number; $height?: number }>`
  width: ${({ $width }) => ($width ? `${$width}rem` : '2rem')};
  height: ${({ $height }) => ($height ? `${$height}rem` : '2rem')};

  fill: none;
  stroke: ${({ theme }) => theme.colors.gray2};

  ${({ theme }) => css`
    ${ChipRectContainer}:hover & {
      fill: ${theme.colors.gray4};
      stroke: ${theme.colors.gray6};
    }
  `}

  ${({ theme }) => css`
    ${ChipRectContainer}:active & {
      fill: ${theme.colors.gray4};
      stroke: ${theme.colors.gray2};
    }
  `}
`;

export const ChipLabel = styled.p`
  color: inherit;
`;
