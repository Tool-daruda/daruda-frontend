import { IcAddimgGray344, PlusImg, Group2085664966 } from '@assets/svgs';
import Toast from '@components/toast/Toast';
import React, { useState } from 'react';

import * as S from './WritingImg.styled';

const WritingImg = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files);
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

        <input
          type="file"
          accept=".png, .jpeg, .jpg, .webp, .heic, .heif"
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
