import styled from '@emotion/styled';

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SkeletonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;

  background-color: ${({ theme }) => theme.colors.gray5};
  border-radius: 0.3rem;

  animation: pulse 1.5s infinite ease-in-out;

  & {
    width: 100%;
  }

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }

    50% {
      opacity: 0.3;
    }

    100% {
      opacity: 0.6;
    }
  }
`;

const Skeleton = () => {
  return (
    <SkeletonWrapper>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </SkeletonWrapper>
  );
};

export default Skeleton;
