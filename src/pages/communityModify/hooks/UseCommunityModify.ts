import { useState } from 'react';

const useCommunityModify = (tool: number | null) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [selectedTool, setSelectedTool] = useState<number | null>(tool);
  const [isFree, setIsFree] = useState(false);

  const handleToolSelect = (toolId: number | null, noTopic: boolean) => {
    setSelectedTool(toolId);
    setIsFree(noTopic);
  };

  return {
    title,
    setTitle,
    body,
    setBody,
    images,
    setImages,
    selectedTool,
    isFree,
    handleToolSelect,
  };
};

export default useCommunityModify;
