import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import type { Meta, StoryObj } from '@storybook/react';

import KakaoAuth from './KakaoAuth';

const headerState: HeaderState = HEADER_STATE.LOGGED_OUT;

const meta: Meta<typeof KakaoAuth> = {
  title: 'Pages/KakaoAuth',
  component: KakaoAuth,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header headerState={headerState} forOnBorder={false} />
        <Story />
        <Footer />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof KakaoAuth>;

export const Default: Story = {};
