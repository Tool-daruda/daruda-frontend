import styled from '@emotion/styled';

interface ModalBtnsProps {
  isPrimaryRight?: boolean;
  primaryBtnContent?: string;
  secondaryBtnContent?: string;
  singleBtnContent?: string;
  handleClose: () => void;
  handleSecondClose?: () => void;
}

const DoubleBtns = ({
  isPrimaryRight,
  primaryBtnContent,
  secondaryBtnContent,
  handleClose,
  handleSecondClose,
}: ModalBtnsProps) => {
  return (
    <S.ModalBtns>
      <S.ModalBtn $isPrimary={true} order={isPrimaryRight ? 1 : 0} onClick={handleSecondClose}>
        {primaryBtnContent}
      </S.ModalBtn>
      <S.ModalBtn $isPrimary={false} order={isPrimaryRight ? 0 : 1} onClick={handleClose}>
        {secondaryBtnContent}
      </S.ModalBtn>
    </S.ModalBtns>
  );
};

const SingleBtn = ({ singleBtnContent, handleClose }: ModalBtnsProps) => {
  return <S.SingleBtn onClick={handleClose}>{singleBtnContent}</S.SingleBtn>;
};

export { DoubleBtns, SingleBtn };

const Button = styled.button`
  ${({ theme }) => theme.fonts.body_16_b_1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  padding: 1.6rem 5.4rem;

  white-space: nowrap;
  text-align: center;
`;

const S = {
  ModalBtns: styled.section`
    display: flex;
    align-items: center;
  `,

  ModalBtn: styled(Button)<{ $isPrimary: boolean; order: number }>`
    order: ${({ order }) => order};

    color: ${({ theme, $isPrimary }) => ($isPrimary ? theme.colors.white1 : theme.colors.black)};

    background: ${({ theme, $isPrimary }) => ($isPrimary ? theme.colors.iris1 : theme.colors.gray6)};
    border-right: ${({ order, theme }) => (order === 1 ? `1px solid ${theme.colors.gray4}` : '0')};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};
    border-left: ${({ order, theme }) => (order === 0 ? `1px solid ${theme.colors.gray4}` : '0')};
    border-bottom-right-radius: ${({ order }) => (order ? '2rem' : '0')};
    border-bottom-left-radius: ${({ order }) => (order ? '0' : '2rem')};
  `,

  SingleBtn: styled(Button)`
    gap: 1rem;
    width: fit-content;
    padding: 1rem 5.4rem;

    ${({ theme }) => theme.fonts.body_16_b_1};
    color: ${({ theme }) => theme.colors.white1};

    background: ${({ theme }) => theme.colors.iris1};
    border-radius: 3.2rem;
  `,
};
