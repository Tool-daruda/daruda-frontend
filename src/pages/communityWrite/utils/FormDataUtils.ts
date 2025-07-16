import { getPresignedUrls, putPresignedUrl } from '@apis/board';

export const createPostFormData = async (
  title: string,
  body: string,
  isFree: boolean,
  selectedTool: number | null,
  images: File[],
) => {
  if (images.length === 0) {
    return {
      title,
      content: body,
      isFree,
      toolId: selectedTool || 1,
      imageList: [],
    };
  }
  try {
    const imageUrls: string[] = [];

    for (const image of images) {
      const signedUrl = await getPresignedUrls(image.name);

      await putPresignedUrl({
        file: image,
        signedUrl: signedUrl,
      });

      const imageUrl = signedUrl.split('?')[0];
      imageUrls.push(imageUrl);
    }

    const formData = {
      title,
      content: body,
      isFree,
      toolId: selectedTool || 1,
      imageList: imageUrls,
    };

    return formData;
  } catch (err) {
    console.error('게시글 업로드 전체 실패:', err);
    throw err;
  }
};
