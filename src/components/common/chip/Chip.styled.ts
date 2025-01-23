import SvgBtnWritingChipxIcon from '@assets/svgs/BtnWritingChipxIcon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { chipColors } from './chipColors';

export const ChipRoundContainer = styled.button<{
  $stroke?: boolean;
  $size?: 'xsmall' | 'small' | 'medium' | 'large' | 'custom';
  $active?: boolean;
}>`
  display: grid;
  place-items: center;

  ${({ theme, $size, $active }) => {
    switch ($size) {
      case 'small':
        return css`
          height: 2.6rem;
          padding: 0.4rem 1rem;

          border-radius: 22px;
          ${theme.fonts.caption_12_b};
        `;
      default:
        // 카테고리 Chip
        return css`
          height: 4rem;
          padding: 0.4rem 1.6rem;

          border-radius: 3.9rem;
          ${theme.fonts.body_16_b_1};

          &:hover {
            ${$active || `color: ${theme.colors.white1}; background-color: ${theme.colors.iris2};`};
          }
        `;
    }
  }}

  color: ${({ theme, $active }) => ($active ? theme.colors[chipColors.categoryChip.color] : theme.colors.gray2)};

  background-color: ${({ theme, $active }) =>
    $active
      ? chipColors.categoryChip.backgroundColor && theme.colors[chipColors.categoryChip.backgroundColor]
      : theme.colors.white2};
  cursor: pointer;
  border: 1px solid ${({ theme, $stroke }) => ($stroke ? theme.colors.gray4 : 'transparent')};
`;

export const ChipRectContainer = styled.button<{
  $stroke?: boolean;
  $size?: 'xsmall' | 'small' | 'medium' | 'large' | 'custom';
  $active?: boolean;
}>`
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  gap: 0.6rem;

  white-space: nowrap;

  cursor: pointer;
  border: 1px solid ${({ theme, $stroke }) => ($stroke ? theme.colors.gray4 : 'transparent')};
  border-radius: 8px;

  ${({ $size, theme, $active }) => {
    switch ($size) {
      case 'xsmall':
        // tool card keyword Chip
        return css`
          height: 2.6rem;
          padding: 0.4rem 1rem;

          ${theme.fonts.caption_12_b};
          color: ${$active ? theme.colors[chipColors.rectChip.color] : theme.colors.gray2};
          line-height: 1;

          background-color: ${theme.colors.white1};
          border: 1px solid
            ${$active
              ? chipColors.rectChip.borderColor && theme.colors[chipColors.rectChip.borderColor]
              : theme.colors.white1};
        `;
      case 'custom':
        //흰 배경 용 추가
        return css`
          height: 2.6rem;
          padding: 0.4rem 1rem;

          ${theme.fonts.caption_12_b};
          color: ${$active ? theme.colors[chipColors.rectChip.color] : theme.colors.gray2};
          line-height: 1;

          background-color: ${theme.colors.white2};
          border: 1px solid
            ${$active
              ? chipColors.rectChip.borderColor && theme.colors[chipColors.rectChip.borderColor]
              : theme.colors.gray4};
        `;
      case 'small':
        return css`
          height: 3.6rem;
          padding: 0.4rem 1.4rem;

          color: ${$active ? theme.colors[chipColors.categoryChip.color] : theme.colors.gray2};

          background-color: ${$active
            ? chipColors.categoryChip.backgroundColor && theme.colors[chipColors.categoryChip.backgroundColor]
            : theme.colors.white1};
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

          background-color: ${$active
            ? chipColors.categoryChip.backgroundColor && theme.colors[chipColors.categoryChip.backgroundColor]
            : theme.colors.white1};
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
`;

export const ChipIcon = styled.img<{ $width?: number; $height?: number }>`
  width: ${({ $width }) => ($width ? `${$width}rem` : '2rem')};
  height: ${({ $height }) => ($height ? `${$height}rem` : '2rem')};

  border-radius: 4px;
`;

export const CloseIcon = styled(SvgBtnWritingChipxIcon)<{ $width?: number; $height?: number }>`
  width: ${({ $width }) => ($width ? `${$width}rem` : '2rem')};
  height: ${({ $height }) => ($height ? `${$height}rem` : '2rem')};

  & rect {
    fill: ${({ theme }) => theme.colors.white1};
  }

  & path {
    stroke: ${({ theme }) => theme.colors.gray2};
  }

  &:hover rect {
    fill: ${({ theme }) => theme.colors.gray4};
  }

  &:hover path {
    stroke: ${({ theme }) => theme.colors.white1};
  }

  &:active rect {
    fill: ${({ theme }) => theme.colors.gray4};
  }

  &:active path {
    stroke: ${({ theme }) => theme.colors.gray2};
  }
`;

export const ChipLabel = styled.p`
  color: inherit;
`;
