import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import type { Meta, StoryObj } from '@storybook/react';

import { MyPageContainerForStory } from './MyPageStoryLayout';

import MyToolPage from '../MyToolPage';

const headerState: HeaderState = HEADER_STATE.LOGGED_IN;

const meta: Meta<typeof MyToolPage> = {
  title: 'Pages/MyPage/FavoriteToolPage',
  component: MyToolPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header headerState={headerState} forOnboarding={false} />
        <MyPageContainerForStory activeMenu={2}>
          <Story />
        </MyPageContainerForStory>
        <Footer />
      </>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MyToolPage>;

export const Default: Story = {};
