import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import type { Meta, StoryObj } from '@storybook/react';

import { MyPageContainerForStory } from './MyPageStoryLayout';

import MyPostPage from '../MyPostPage';

const headerState: HeaderState = HEADER_STATE.LOGGED_IN;

const meta: Meta<typeof MyPostPage> = {
  title: 'Pages/MyPage/MyPostPage',
  component: MyPostPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header headerState={headerState} forOnboarding={false} />
        <MyPageContainerForStory activeMenu={3}>
          <Story />
        </MyPageContainerForStory>
        <Footer />
      </>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MyPostPage>;

export const Default: Story = {};
