import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 780px;
  height: 148px;
  padding: 24px 40px;

  background: ${({ theme }) => theme.colors.white1};
  box-shadow: 0 0 12px 0 ${({ theme }) => theme.colors.shadow1};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 16px;
`;

export const Button = styled.button`
  position: absolute;
  top: 2.4rem;
  left: 4rem;
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  padding: 2.8rem;

  background: ${({ theme }) => theme.colors.white2};
  cursor: pointer;
  border-radius: 0.8rem;

  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray4};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray4};
    transform: scale(0.95);
  }
`;

export const ImagePreview = styled.div`
  border-radius: 0.8rem;

  img {
    flex-shrink: 0;
    gap: 1rem;
    align-items: flex-start;
    justify-content: flex-end;
    width: 10rem;
    height: 10rem;
    object-fit: cover;

    border-radius: 0.8rem;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  width: 90rem;
  margin-top: 0.7rem;
  margin-left: 11rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0.6rem;

  color: ${({ theme }) => theme.colors.black};

  background: ${({ theme }) => theme.colors.white2};
  cursor: pointer;
  border: none;
  border-radius: 50%;

  transition:
    transform 0.2s,
    fill 0.2s;

  & {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.white1};
  }

  & svg path {
    stroke: ${({ theme }) => theme.colors.gray2};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray4};
  }

  &:hover svg path {
    stroke: ${({ theme }) => theme.colors.gray6};
  }

  &:active {
    background: ${({ theme }) => theme.colors.gray4};
    transform: scale(0.9);
  }

  &:active svg path {
    stroke: ${({ theme }) => theme.colors.gray2};
  }
`;
