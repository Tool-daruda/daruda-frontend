import { NotFill } from '@assets/svgs';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-content: flex-start;
  align-items: flex-start;
  width: 86rem;
`;

export const Card = styled.div`
  position: relative;
  width: 42rem;
  height: 20rem;
  overflow: hidden;

  background-color: white;
  border-radius: 2rem;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0.2rem 0.4rem 1.2rem 0 rgb(201 201 201 / 63%);
  }
`;

export const CardFront = styled.div<{ bgColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 42rem;
  height: 20rem;

  background-color: ${({ bgColor }) => bgColor};
  border-radius: 2rem;

  transition:
    clip-path 0.3s ease-in-out,
    opacity 0.1s ease-in-out;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  ${Card}:hover & {
    clip-path: polygon(61.9% 0, 100% 0, 100% 100%, 61.9% 100%);
  }
`;

export const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.white1};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 2rem;

  transition:
    clip-path 0.3s ease-in-out,
    opacity 0.5s ease-in-out;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

export const ToolLogo = styled.img`
  position: absolute;
  right: 3rem;
  bottom: 5rem;
  width: 10rem;
  height: 10rem;
`;

export const ToolNameFront = styled.h2<{ textColor: boolean }>`
  ${({ theme }) => theme.fonts.head_28_b};
  position: absolute;
  top: 5.1rem;
  left: 3rem;

  color: ${({ textColor, theme }) => (textColor ? theme.colors.black : theme.colors.white1)};
  font-size: 3.6rem;
`;

export const ToolNameBack = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.fonts.head_28_b};
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.8rem;
  text-align: center;
`;

export const Description = styled.p`
  display: -webkit-box;
  width: 16rem;
  height: 3.2rem;
  overflow: hidden;

  ${({ theme }) => theme.fonts.caption_12_r};
  color: ${({ theme }) => theme.colors.gray2};
  text-align: left;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
`;

export const Keywords = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const KeywordsFront = styled.div`
  position: absolute;
  bottom: 3.7rem;
  left: 3rem;
  display: flex;
  gap: 0.8rem;
`;

export const LicenseBadge = styled.span`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.orange1};
  ${({ theme }) => theme.fonts.body_16_b_2};

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const CardBackBox = styled.div`
  position: absolute;
  left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20rem;
  height: 13.4rem;
`;

export const BookMark = styled(NotFill)<{ bookmarked: boolean }>`
  cursor: pointer;

  fill: ${({ bookmarked, theme }) => (bookmarked ? theme.colors.iris1 : 'none')};
`;
