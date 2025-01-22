import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import type { Meta, StoryObj } from '@storybook/react';

import { MyPageContainerForStory } from './MyPageStoryLayout';

import MyFavoritePostPage from '../MyFavoritePostPage';

const headerState: HeaderState = HEADER_STATE.LOGGED_IN;

const meta: Meta<typeof MyFavoritePostPage> = {
  title: 'Pages/MyPage/FavoritePostPage',
  component: MyFavoritePostPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header headerState={headerState} forOnboarding={false} />
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
