import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import type { Meta, StoryObj } from '@storybook/react';

import { MyPageContainerForStory } from './MyPageStoryLayout';

import MyFavoritePostPage from '../MyFavoritePostPage';

const meta: Meta<typeof MyFavoritePostPage> = {
  title: 'Pages/MyPage/FavoritePostPage',
  component: MyFavoritePostPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header forOnboarding={false} />
        <MyPageContainerForStory activeMenu={4}>
          <Story />
        </MyPageContainerForStory>
        <Footer />
      </>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MyFavoritePostPage>;

export const Default: Story = {};
