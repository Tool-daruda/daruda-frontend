import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import ReportModal from './ReportModal';

const meta: Meta<typeof ReportModal> = {
  title: 'Components/ReportModal',
  component: ReportModal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Report: Story = {
  args: {
    isOpen: false,
    handleClose: () => {},
  },
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(context.args.isOpen);

      const handleClose = () => {
        setIsOpen(false);
      };

      const handleOepn = () => {
        setIsOpen(true);
      };

      return (
        <div>
          <button onClick={handleOepn}>모달 열기</button>
          <Story args={{ ...context.args, isOpen, handleClose }} />
        </div>
      );
    },
  ],
};
