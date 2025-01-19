import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import type { Meta, StoryObj } from '@storybook/react';

import ToolDetail from './ToolDetail';

const headerState: HeaderState = HEADER_STATE.LOGGED_IN;

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
        <Header headerState={headerState} />
        <Story />
        <Footer />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToolDetail>;

export const Default: Story = {};
