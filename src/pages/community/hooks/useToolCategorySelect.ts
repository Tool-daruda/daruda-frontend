import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useToolCategorySelect = () => {
  const [pickedtool, setPickedtool] = useState<number | null>(null); // 카테고리 중 선택한 툴 정보 (자유일 경우 null)
  const [noTopic, setIsNoTopic] = useState<boolean>(false); // 자유 게시판 선택 여부

  const location = useLocation();
  const state = location.state as {
    toolId: number | null;
    toolLogo: string;
    toolName: string;
  } | null;

  useEffect(() => {
    // tool detail 로 부터 전달된 tool filter 정보
    if (state) {
      setPickedtool(state.toolId);
      setIsNoTopic(state.toolId === null);
    }

    // community detail 로 부터 전달된 tool filter 정보
    const storedTool = JSON.parse(sessionStorage.getItem('originTool') || 'null');

    if (storedTool) {
      setPickedtool(storedTool.toolId);
      setIsNoTopic(storedTool.toolId == null);
    }
  }, [location.pathname, state]);

  const handleToolSelect = (toolId: number | null, noTopic: boolean) => {
    setPickedtool(toolId);
    setIsNoTopic(toolId === null && noTopic);
  };

  return {
    handleToolSelect,
    pickedtool,
    setPickedtool,
    noTopic,
  };
};

export default useToolCategorySelect;
