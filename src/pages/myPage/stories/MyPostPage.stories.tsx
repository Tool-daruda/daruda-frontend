import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import type { Meta, StoryObj } from '@storybook/react';

import { MyPageContainerForStory } from './MyPageStoryLayout';

import MyPostPage from '../MyPostPage';

const meta: Meta<typeof MyPostPage> = {
  title: 'Pages/MyPage/MyPostPage',
  component: MyPostPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header forOnboarding={false} />
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
