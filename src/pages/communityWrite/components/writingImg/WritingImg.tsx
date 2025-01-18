import { IcAddimgGray344, PlusImg, Group2085664966 } from '@assets/svgs';
import React, { useState } from 'react';

import * as S from './WritingImg.styled';

const WritingImg = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).slice(0, 5 - images.length);
      const fileReaders: Promise<string>[] = newImages.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      Promise.all(fileReaders)
        .then((results) => {
          setImages((prev) => [...prev, ...results]);
        })
        .catch((err) => console.error('이미지 로드 에러:', err));
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <S.Container>
      <label>
        <S.Button as="span" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {isHovered ? <PlusImg /> : <IcAddimgGray344 />}
        </S.Button>
        <input
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={handleImageUpload}
          disabled={images.length >= 5}
        />
      </label>
      <S.PreviewContainer>
        {images.map((image, index) => (
          <S.ImagePreview key={index}>
            <S.ImageContainer>
              <img src={image} alt={`미리보기 ${index + 1}`} />
              <S.RemoveButton onClick={() => handleRemoveImage(index)}>
                <Group2085664966 />
              </S.RemoveButton>
            </S.ImageContainer>
          </S.ImagePreview>
        ))}
      </S.PreviewContainer>
    </S.Container>
  );
};

export default WritingImg;
