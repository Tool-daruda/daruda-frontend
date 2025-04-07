import type { Meta, StoryObj } from '@storybook/react';

import ToolDetail from './ToolDetail';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';

const meta: Meta<typeof ToolDetail> = {
  title: 'Pages/ToolDetail',
  component: ToolDetail,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Footer />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToolDetail>;

export const Default: Story = {};
