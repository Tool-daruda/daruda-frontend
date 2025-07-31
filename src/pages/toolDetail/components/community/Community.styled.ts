import styled from '@emotion/styled';

interface ImageWrapperProps {
  imageUrl?: string;
}

export const CardSectionWrapper = styled.div<{ $forShort: boolean | undefined }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 76.8rem;
  padding-bottom: ${({ $forShort }) => ($forShort ? '52rem' : '11.2rem')};

  background-color: ${({ theme }) => theme.colors.white1};
  border-radius: 1.6rem;
`;

export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 1rem;
  align-content: flex-start;
  align-items: flex-start;
  width: 69.2rem;
`;

export const CardWrapper = styled.article`
  flex-shrink: 0;
  width: 22.4rem;
  height: 15.4rem;

  background: ${({ theme }) => theme.colors.white1};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: 0.8rem;

  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  }

  &:active {
    background: ${({ theme }) => theme.colors.white2};
    box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
    transform: scale(0.99);
  }
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: ${(props) => (props.imageUrl ? '5.6rem' : '0')};
  height: ${(props) => (props.imageUrl ? '8rem' : '0')};

  background-image: ${(props) => (props.imageUrl ? `url(${props.imageUrl})` : 'none')};
  background-position: center;
  background-size: cover;
  border-radius: ${(props) => (props.imageUrl ? '0.4rem' : '0')};
`;

export const ContentWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => (props.imageUrl ? '1rem' : '1.4rem')};
`;

export const Title = styled.h3`
  width: 19.6rem;
  height: 1.8rem;
  ${({ theme }) => theme.fonts.caption_12_b};
  overflow: hidden;

  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Description = styled.div<ImageWrapperProps>`
  display: -webkit-box;
  width: ${(props) => (props.imageUrl ? '13rem' : '19.6rem')};
  height: ${(props) => (props.imageUrl ? '7.2rem' : '7.2rem')};
  margin: ${(props) => (props.imageUrl ? '0.4rem 0 0.4rem 1rem' : '0')};

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;

  ${({ theme }) => theme.fonts.caption_12_m};
  color: ${({ theme }) => theme.colors.gray1};
  text-overflow: ellipsis;
`;

export const NickName = styled.div`
  display: flex;
  gap: 0.3rem;

  ${({ theme }) => theme.fonts.caption_10_m};
  color: ${({ theme }) => theme.colors.gray2};
`;

export const CardBox = styled.div`
  height: 5.2rem;
  padding: 1rem 1.4rem;

  ${({ theme }) => theme.fonts.caption_10_m};
  color: ${({ theme }) => theme.colors.gray2};

  background-color: ${({ theme }) => theme.colors.white1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: 0.8rem 0.8rem 0 0;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 3.6rem;

  h2 {
    ${({ theme }) => theme.fonts.body_24_b};
    color: ${({ theme }) => theme.colors.black};
  }

  button {
    ${({ theme }) => theme.fonts.body_16_r};
    color: ${({ theme }) => theme.colors.iris1};

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NullBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5rem 10.8rem 0;
`;

export const NullAlertText = styled.span`
  width: 100%;

  color: ${({ theme }) => theme.colors.gray1};
  text-align: center;
  ${({ theme }) => theme.fonts.body_20_b};
`;

export const NullText = styled.span`
  width: 100%;
  margin-top: 1rem;

  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;
  ${({ theme }) => theme.fonts.caption_14_m};
`;
