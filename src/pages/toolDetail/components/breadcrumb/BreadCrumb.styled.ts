import styled from '@emotion/styled';

export const BreadCrumbWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  width: 104.6rem;
  height: 3.2rem;
`;

export const BreadCrumbContainer = styled.div`
  display: flex;
  align-items: center;
  width: 99rem;
  height: 2rem;
`;

export const CategoryItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.fonts.caption_14_m};
  color: ${({ theme }) => theme.colors.gray3};

  &:hover {
    text-decoration: underline;
  }
`;

export const ToolNameBox = styled(CategoryItem)`
  color: ${({ theme }) => theme.colors.black};
`;
