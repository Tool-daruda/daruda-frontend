import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useToolCategorySelect = () => {
  const [pickedtool, setPickedtool] = useState<number | null>(null); // 카테고리 중 선택한 툴 정보 (자유일 경우 null)
  const [noTopic, setIsNoTopic] = useState<boolean>(false); // 자유 게시판 선택 여부

  const [initialTool, setInitialTool] = useState<{
    toolId: number | null;
    toolLogo: string;
    toolName: string;
  }>();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setPickedtool(location.state.toolId);
      setInitialTool({
        toolId: location.state.toolId,
        toolName: location.state.toolMainName,
        toolLogo: location.state.toolLogo,
      });
    }
  }, [location.state]);

  const handleToolSelect = (toolId: number | null, noTopic: boolean) => {
    setPickedtool(toolId);
    setIsNoTopic(toolId === null && noTopic);
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
