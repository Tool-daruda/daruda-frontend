import { IcAddimgGray344, PlusImg, Group2085664966 } from '@assets/svgs';
import Toast from '@components/toast/Toast';
import React, { useEffect, useState } from 'react';

import * as S from './WritingImg.styled';

interface WritingImgProps {
  originImages: File[];
  onImageUpload: (files: File[]) => void;
}

const WritingImg = ({ originImages, onImageUpload }: WritingImgProps) => {
  const [images, setImages] = useState<File[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  // 초기 이미지에 원래 업로드했던 이미지 추가
  useEffect(() => {
    if (originImages.length > 0) {
      setImages(originImages);
    }
  }, [originImages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files);

      if (newImages.some((file) => file.size > 7 * 1024 * 1024)) {
        console.error('파일 용량 초과');
        return;
      }
      const validTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif'];
      if (newImages.some((file) => !validTypes.includes(file.type))) {
        console.error('파일 형식 오류');
        return;
      }

      const updatedImages: File[] = [...images, ...newImages];
      setImages(updatedImages);
      onImageUpload(updatedImages);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImageUpload(updatedImages);
  };

  const handleAddImageClick = () => {
    if (images.length >= 5) {
      setIsToastVisible(true);
      setTimeout(() => setIsToastVisible(false), 3000);
    }
    setIsClicked((prev) => !prev);
  };

  return (
    <S.Container>
      <label>
        <S.Button
          as="span"
          isHovered={isHovered}
          isClicked={isClicked}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleAddImageClick}
        >
          {isHovered ? <PlusImg /> : <IcAddimgGray344 />}
        </S.Button>

        <S.Input
          type="file"
          accept=".png, .jpeg, .jpg, .webp, .heic, .heif"
          multiple
          onChange={handleImageUpload}
          disabled={images.length >= 5}
        />
      </label>
      <S.PreviewContainer>
        {images.map((image, index) => (
          <S.ImagePreview key={index}>
            <S.ImageContainer>
              <img src={URL.createObjectURL(image)} alt={`미리보기 ${index + 1}`} />
              <S.RemoveButton onClick={() => handleRemoveImage(index)}>
                <Group2085664966 />
              </S.RemoveButton>
            </S.ImageContainer>
          </S.ImagePreview>
        ))}
      </S.PreviewContainer>
      <S.Content>* 이미지 업로드 용량은 한장 당 최대 7MB 입니다.</S.Content>
      {isToastVisible && (
        <S.ToastBox>
          <Toast isVisible={true} isWarning={true}>
            이미지는 최대 5장까지 첨부할 수 있습니다.
          </Toast>
        </S.ToastBox>
      )}
    </S.Container>
  );
};

export default WritingImg;
