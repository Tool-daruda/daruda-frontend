import { getPresignedUrls, putPresignedUrl } from '@apis/board';

export const createPostFormData = async (
  title: string,
  body: string,
  isFree: boolean,
  selectedTool: number | null,
  images: (File | string)[],
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
      if (typeof image === 'string') {
        // 이미 업로드된 이미지 URL
        imageUrls.push(image);
      } else {
        // 새로 추가된 File
        const signedUrl = await getPresignedUrls(image.name);

        await putPresignedUrl({
          file: image,
          signedUrl: signedUrl,
        });

        const imageUrl = signedUrl.split('?')[0];
        imageUrls.push(imageUrl);
      }
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
    console.error('게시글 업로드 실패:', err);
    throw err;
  }
};
