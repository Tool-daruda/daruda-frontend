export const formatToMonthDay = (dateString: Date): string => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());

  return `${month}월 ${day}일`;
};
