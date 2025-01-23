export const createPostFormData = (
  title: string,
  body: string,
  isFree: boolean,
  selectedTool: number | null,
  images: File[],
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', body);
  formData.append('isFree', isFree || selectedTool === null ? 'true' : 'false');

  if (isFree || selectedTool === null) {
    formData.append('toolId', '1');
  } else if (selectedTool !== null) {
    formData.append('toolId', String(selectedTool));
  }

  images.forEach((image) => {
    if (image instanceof File) {
      formData.append(`images`, image);
    }
  });

  return formData;
};
