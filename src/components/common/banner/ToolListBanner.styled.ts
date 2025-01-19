import styled from '@emotion/styled';

export const Container = styled.div<{ $forCommunity: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 24.6rem;
  height: ${({ $forCommunity }) => ($forCommunity ? '100vh' : '67.1rem')};
  margin-top: ${({ $forCommunity }) => $forCommunity && '2.4rem'};
  overflow: ${({ $forCommunity }) => ($forCommunity ? 'auto' : 'hidden auto')};

  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border: 1px solid ${({ theme, $forCommunity }) => ($forCommunity ? 'none' : theme.colors.gray4)};
  border-radius: 2rem;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ $forCommunity }) =>
    $forCommunity &&
    'height: auto; align-self: stretch; margin-bottom: 0rem; border-bottom-left-radius: 0; border-bottom-right-radius: 0;'}
`;

export const TitleBox = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  width: 100%;
  height: 10rem;
  padding: 1.6rem 2.4rem;

  background: ${({ theme }) => theme.colors.white1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 2rem 2rem 0 0;
`;

export const Title = styled.h1<{ isSelected: boolean }>`
  ${({ theme }) => theme.fonts.body_20_b};
  margin-bottom: ${({ isSelected }) => (isSelected ? '0.8rem' : '0.6rem')};
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.fonts.caption_12_b};
  color: ${({ theme }) => theme.colors.gray3};
`;

export const CategoryList = styled.ul`
  ${({ theme }) => theme.fonts.body_16_b_2};
  width: 24.6rem;
  height: 100%;
  margin: 0;
  padding: 0;

  list-style: none;
  background-color: ${({ theme }) => theme.colors.white1};
`;

export const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  min-height: 5.6rem;
`;

export const CategoryHeader = styled.div<{ isFreeChecked: boolean }>`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  height: 5.6rem;
  padding: 1.9rem 2.4rem;

  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.colors.gray4};

  & svg path {
    fill: ${({ theme, isFreeChecked }) => (isFreeChecked ? theme.colors.white1 : theme.colors.black)};
  }
`;

export const ToolList = styled.ul`
  display: block;
  flex-direction: column;
  width: 100%;
  margin: 0;

  list-style: none;
  border-top: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.gray4};
  border-bottom: 0;
  border-left: 1px solid ${({ theme }) => theme.colors.gray4};
`;

export const ToolItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  gap: 0.8rem;
  padding: 1.6rem 2.4rem;

  background: ${({ theme, isSelected }) => (isSelected ? theme.colors.orange2 : theme.colors.white1)};
  cursor: pointer;

  &:hover {
    background: ${({ theme, isSelected }) => (isSelected ? theme.colors.orange2 : theme.colors.white2)};
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CheckboxInput = styled.input`
  position: relative;
  width: 2rem;
  height: 2rem;
  margin: 0;

  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 0.4rem;

  appearance: none;

  &:checked {
    background-color: ${({ theme }) => theme.colors.iris1};
    border: 1px solid ${({ theme }) => theme.colors.iris1};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;

  border-radius: 0.4rem;
`;
