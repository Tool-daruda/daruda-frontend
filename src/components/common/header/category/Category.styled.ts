import styled from '@emotion/styled';

export const CategoryNav = styled.li`
  position: relative;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  width: 8.4rem;
  height: 100%;
`;

export const CategorySection = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  height: 3.2rem;

  ${({ theme }) => theme.fonts.body_16_b_1};
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
  border-radius: 1.6rem 1.6rem 0 0;

  &:hover {
    color: ${({ theme }) => theme.colors.iris1_click};
  }
`;

export const ToggleIcon = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};

  transition: transform 0.3s ease;
`;

export const OpenedCategoryWrapper = styled.div`
  position: absolute;
  top: -1rem;
  left: -1.8rem;
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

export const OpenedCategory = styled.section`
  z-index: 101;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  width: 12rem;
  padding: 1rem 1.8rem;
  padding-bottom: 1.95rem;

  color: ${({ theme }) => theme.colors.iris1_click};

  background-color: ${({ theme }) => theme.colors.white1};
  box-shadow: 0 -1.2rem 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border-radius: 1.6rem 1.6rem 0 0;
  ${({ theme }) => theme.fonts.body_16_b_1};
`;

export const CategoryDropdown = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6rem 1.2rem;
  width: 66.6rem;
  height: 14rem;
  padding: 1.6rem 1.8rem;

  color: ${({ theme }) => theme.colors.iris1_click};

  background-color: ${({ theme }) => theme.colors.white1};
  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border-top: none;
  border-radius: 0 1.6rem 1.6rem;
`;

export const CategoryItem = styled.div`
  padding: 0.2rem 0 0.2rem 1rem;

  color: ${({ theme }) => theme.colors.black};

  background-color: transparent;
  cursor: pointer;
  border-radius: 0.8rem;
  ${({ theme }) => theme.fonts.body_16_m};

  &:hover {
    color: ${({ theme }) => theme.colors.iris1_click};

    background-color: ${({ theme }) => theme.colors.white2};
  }

  &:active {
    color: ${({ theme }) => theme.colors.iris1_click};

    background-color: ${({ theme }) => theme.colors.gray5};
  }
`;
