export const splitAndCountLines = (name: string) => {
  // 첫 번째 띄어쓰기를 기준으로 줄나눔
  const formattedToolName = name.replace(' ', '\n');
  const lineCount = formattedToolName.includes('\n') ? 2 : 1;

  return { formattedToolName, lineCount };
};
