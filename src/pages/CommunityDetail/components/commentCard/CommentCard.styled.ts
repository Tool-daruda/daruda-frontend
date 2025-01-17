import styled from '@emotion/styled';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  align-self: stretch;
`;

export const MetaInfo = styled.span`
  ${({ theme }) => theme.fonts.caption_12_r};
  display: flex;
  gap: 0.6rem;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray2};
`;

export const CommentImg = styled.img`
  border: 0.75px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 0.8rem;
`;

export const CommentContent = styled.pre`
  ${({ theme }) => theme.fonts.caption_14_m};
  color: ${({ theme }) => theme.colors.gray1};
  white-space: break-spaces;
`;
