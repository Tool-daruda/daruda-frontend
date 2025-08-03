import { useState } from 'react';

const useCommunityWrite = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [isFree, setIsFree] = useState(false);

  const handleToolSelect = (toolId: number | null, noTopic: boolean) => {
    setSelectedTool(toolId);
    setIsFree(noTopic);
  };

  const isButtonDisabled = title.trim() === '' || body.trim() === '' || (!isFree && selectedTool === null);

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
    isButtonDisabled,
  };
};

export default useCommunityWrite;
