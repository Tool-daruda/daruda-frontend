import { NotFill } from '@assets/svgs';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  margin-bottom: 2rem;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-content: flex-start;
  align-items: flex-start;
  width: 86rem;
  margin-bottom: 8rem;
`;

export const Card = styled.li`
  position: relative;
  width: 42rem;
  height: 20rem;
  overflow: hidden;

  background-color: white;
  cursor: pointer;
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
  border-left: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: 2rem;

  transition:
    clip-path 0.3s ease-in-out,
    opacity 0.1s ease-in-out;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  ${Card}:hover & {
    clip-path: polygon(61.9% 0, 100% 0, 100% 100%, 61.9% 100%);
  }

  ${({ bgColor, theme }) =>
    bgColor === '#FFFFFF' &&
    `
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 61.9%;
        width: 1px;
        height: 100%;
        background-color: ${theme.colors.gray4}; 
        opacity: 0; 
        transition: opacity 0.3s ease-in-out; 
        z-index: 3;
      }
  
      ${Card}:hover &::after {
        opacity: 1; 
      }
    `}
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

export const ToolNameFront = styled.h1<{ fontColor: boolean; isKorean: boolean }>`
  position: absolute;
  top: 3.7rem;
  left: 3rem;
  display: flex;
  align-items: center;
  width: 23.6rem;
  height: 6rem;

  color: ${({ fontColor, theme }) => (fontColor ? theme.colors.black : theme.colors.white1)};
  ${({ isKorean, theme }) => (isKorean ? theme.fonts.head_32_b : theme.fonts.card_36_B)};
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const ToolBackTitle = styled.h2<{ isKorean: boolean }>`
  display: flex;
  align-items: center;
  width: 15.6rem;
  height: 4rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ isKorean, theme }) => (isKorean ? theme.fonts.body_20_b : theme.fonts.card_18_B_20)};
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const ToolNameBack = styled.h2`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  height: 4rem;

  ${({ theme }) => theme.fonts.head_28_b};
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
`;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 16rem;
  height: 3.2rem;
  margin-top: 0.4rem;
  overflow: hidden;

  ${({ theme }) => theme.fonts.caption_12_r};
  color: ${({ theme }) => theme.colors.gray2};
  text-align: left !important;
  text-overflow: ellipsis;
`;
//사파리에서 정렬 확인해보기

export const Keywords = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const KeywordsFront = styled.div`
  position: absolute;
  bottom: 2.9rem;
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
  height: 14.2rem;

  text-align: left;
`;

export const BookMark = styled(NotFill)<{ bookmarked: boolean }>`
  cursor: pointer;

  fill: ${(props) => (!props.bookmarked ? 'none' : props.theme.colors.iris1)};
`;

export const EmptyMessage = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  ${({ theme }) => theme.fonts.body_20_m}
  margin-top:5rem;
`;

export const Lottie = styled.div`
  margin-bottom: 4rem;
`;

export const Toast = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;

  transform: translate(-50%, -50%);
`;
