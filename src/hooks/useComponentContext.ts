import { useContext, Context } from 'react';

// 합성 컴포넌트에서 컴포넌트의 내부 상태를 공유할 수 있는 useContext Hook
const useComponentContext = <T>(context: Context<T | undefined>, componentName: string): T => {
  const ctx = useContext(context);
  if (!ctx) {
    throw new Error(`${componentName} 컴포넌트 안에서 사용해주세요`);
  }
  return ctx;
};

export default useComponentContext;
