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
    const storedTool = JSON.parse(sessionStorage.getItem('originTool') || 'null');
    const toolToUse = storedTool || location.state;
    if (toolToUse) {
      setPickedtool(toolToUse.toolId);
      setIsNoTopic(toolToUse.toolId == null);
      setInitialTool({
        toolId: toolToUse.toolId,
        toolName: toolToUse.toolMainName,
        toolLogo: toolToUse.toolLogo,
      });
    }
  }, []);

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
