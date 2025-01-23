import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import type { Meta, StoryObj } from '@storybook/react';

import SignUp from './SignUp';

const headerState: HeaderState = HEADER_STATE.LOGGED_OUT;

const meta: Meta<typeof SignUp> = {
  title: 'Pages/SignUp',
  component: SignUp,
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

type Story = StoryObj<typeof SignUp>;

export const Default: Story = {};
