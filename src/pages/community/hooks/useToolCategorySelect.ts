import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useToolCategorySelect = () => {
  const [pickedtool, setPickedtool] = useState<number | null>(null); // 카테고리 중 선택한 툴 정보 (자유일 경우 null)
  const [noTopic, setIsNoTopic] = useState<boolean>(false); // 자유 게시판 선택 여부

  const location = useLocation();
  const state = location.state as {
    toolId: number | null;
    toolLogo: string;
    toolName: string;
  } | null;
  const navigate = useNavigate();
  const [initialTool, setInitialTool] = useState<{
    toolId: number | null;
    toolLogo: string;
    toolName: string;
  }>();

  useEffect(() => {
    if (state) {
      setPickedtool(state.toolId);
      setIsNoTopic(state.toolId === null);
      setInitialTool({
        toolId: state.toolId,
        toolName: state.toolName,
        toolLogo: state.toolLogo,
      });
    } else {
      setPickedtool(null);
      setIsNoTopic(true);
    }
  }, [location.pathname, state]);

  const handleToolSelect = (toolId: number | null, noTopic: boolean) => {
    setPickedtool(toolId);
    setIsNoTopic(toolId === null && noTopic);
    navigate('.', {
      state: null,
      replace: true,
    });
  };

  return {
    handleToolSelect,
    pickedtool,
    setPickedtool,
    noTopic,
    initialTool,
    setInitialTool,
  };
};

export default useToolCategorySelect;
