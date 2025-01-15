const formatContent = (content: string, ImgCount: number): string => {
  const limit = ImgCount >= 1 ? 120 : 240;
  return content.length > limit ? content.slice(0, limit) + '...' : content;
};

export default formatContent;
