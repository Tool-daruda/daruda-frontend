import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import type { Meta, StoryObj } from '@storybook/react';

import NotFound from './NotFound';

const headerState: HeaderState = HEADER_STATE.LOGGED_IN;

const meta: Meta<typeof NotFound> = {
  title: 'Pages/NotFound',
  component: NotFound,
  parameters: {
    layout: 'fullscreen',
  },
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

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {};
