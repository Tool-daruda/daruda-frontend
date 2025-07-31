import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import ReportModal from './ReportModal';

const meta: Meta<typeof ReportModal> = {
  title: 'Components/ReportModal',
  component: ReportModal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ReportModal>;

const ReportModalStoryComponent = (args: React.ComponentProps<typeof ReportModal>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setErrMsg] = useState('');

  const handleToastOpen = () => {
    // 토스트 열기 (스토리북 환경 특성상 로직 생략)
  };

  const handleTaostMsg = (msg: string) => {
    setErrMsg(msg);
  };

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <button onClick={handleOpen}>모달 열기</button>
      <ReportModal
        {...args}
        isOpen={isOpen}
        handleClose={handleClose}
        handleToastMsg={handleTaostMsg}
        handleToastOpen={handleToastOpen}
      />
    </div>
  );
};

export const Report: Story = {
  args: {
    isOpen: false,
    handleClose: () => {},
    handleToastOpen: () => {},
    handleToastMsg: () => {},
  },
  render: (args) => <ReportModalStoryComponent {...args} />,
};
