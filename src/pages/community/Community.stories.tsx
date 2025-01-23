import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import type { Meta, StoryObj } from '@storybook/react';

import Community from './Community';

const headerState: HeaderState = HEADER_STATE.LOGGED_IN;

const meta: Meta<typeof Community> = {
  title: 'Pages/Community',
  component: Community,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header headerState={headerState} forOnboarding={false} />
        <Story />
        <Footer />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Community>;

export const Default: Story = {};
