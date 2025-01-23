import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import type { Meta, StoryObj } from '@storybook/react';

import KakaoAuth from './KakaoAuth';

const meta: Meta<typeof KakaoAuth> = {
  title: 'Pages/KakaoAuth',
  component: KakaoAuth,
  parameters: {
    layout: 'fullscreen',
  },
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

type Story = StoryObj<typeof KakaoAuth>;

export const Default: Story = {};
