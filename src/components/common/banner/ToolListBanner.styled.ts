import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 24.6rem;
  height: 67.1rem;
  margin: 2rem;
  overflow: hidden auto;

  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 2rem;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
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
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  min-height: 5.6rem;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  height: 5.6rem;
  padding: 1.9rem 2.4rem;

  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.colors.gray4};
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
