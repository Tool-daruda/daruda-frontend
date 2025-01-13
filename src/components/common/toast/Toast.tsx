import * as S from './Toast.styled';

type ToastProps = {
  isVisible: boolean;
  isWarning: boolean;
  children: string;
};

const Toast = ({ isVisible, children, isWarning }: ToastProps) => {
  return (
    <S.ToastWrapper $isVisible={isVisible} $isWarning={isWarning}>
      <S.ToastMessage>{children}</S.ToastMessage>
    </S.ToastWrapper>
  );
};

export default Toast;
