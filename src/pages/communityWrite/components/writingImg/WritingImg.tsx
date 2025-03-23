import { IcAddimgGray344, PlusImg, Group2085664966 } from '@assets/svgs';
import Toast from '@components/toast/Toast';
import React, { useState } from 'react';

import * as S from './WritingImg.styled';

interface WritingImgProps {
  onImageUpload: (files: File[]) => void;
  images: File[];
}

const WritingImg = ({ onImageUpload, images }: WritingImgProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return; // file 없으면 early return

    const newImages = Array.from(files);

    // 개수 초과 확인 (기존 이미지 개수 + 새 이미지 개수)
    if (images.length + newImages.length > 5) {
      setIsToastVisible(true);
      setTimeout(() => setIsToastVisible(false), 3000);
      e.target.value = ''; // input 초기화
      return;
    }

    // 파일 용량 검사
    if (newImages.some((file) => file.size > 7 * 1024 * 1024)) {
      console.error('파일 용량 초과');
      e.target.value = ''; // input 초기화
      return;
    }

    // 지원하지 않는 형식 검사
    const validTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif'];
    if (newImages.some((file) => !validTypes.includes(file.type))) {
      console.error('파일 형식 오류');
      e.target.value = ''; // input 초기화
      return;
    }

    // 기존 이미지에 추가
    const updatedImages: File[] = [...images, ...newImages];
    onImageUpload(updatedImages);

    e.target.value = ''; // input 초기화
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
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
        {images?.map((image, index) => (
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
      <S.Content>
        * 이미지를 추가하려면 붙여넣기 또는 클릭하세요. {'\n'} * 이미지 업로드 용량은 한장 당 최대 7MB 입니다.
      </S.Content>
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
