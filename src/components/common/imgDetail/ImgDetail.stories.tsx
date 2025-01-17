import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import ImgDetail from './ImgDetail';

export default {
  title: 'Components/ImageDetail',
  component: ImgDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(false);

      const handleModalClose = () => {
        setIsOpen(false);
      };

      const handleOpen = () => {
        setIsOpen(true);
      };

      return (
        <div>
          <button onClick={handleOpen}>사진 클릭</button>
          {isOpen && <Story args={{ ...context.args, handleModalClose }} />}
        </div>
      );
    },
  ],
} as Meta<typeof ImgDetail>;

type Story = StoryObj<typeof ImgDetail>;
export const Default: Story = {
  args: {
    imgList: [
      'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png',
    ],
    index: 0,
  },
};

export const LongImage: Story = {
  args: {
    imgList: [
      'https://mblogthumb-phinf.pstatic.net/MjAyMTA2MDdfMjM4/MDAxNjIzMDQ2MjA1OTY4.EQxMIV0UDB16AtSDixaxxARU-j-9TR7FwI99BAI3Igog.OfP6ySj92pfhC-4nAF7dNOjhREXQQ6johvr2E0Qrgbwg.JPEG.loanpass2/%EC%B9%B4%ED%86%A1_%EC%9D%B5%EB%AA%85_%EC%BA%A1%EC%B3%90_%281%29.jpg?type=w420',
    ],
    index: 0,
  },
};

export const Images: Story = {
  args: {
    imgList: [
      'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png',
      'https://mblogthumb-phinf.pstatic.net/MjAyMTA2MDdfMjM4/MDAxNjIzMDQ2MjA1OTY4.EQxMIV0UDB16AtSDixaxxARU-j-9TR7FwI99BAI3Igog.OfP6ySj92pfhC-4nAF7dNOjhREXQQ6johvr2E0Qrgbwg.JPEG.loanpass2/%EC%B9%B4%ED%86%A1_%EC%9D%B5%EB%AA%85_%EC%BA%A1%EC%B3%90_%281%29.jpg?type=w420',
      'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png',
    ],
    index: 0,
  },
};
