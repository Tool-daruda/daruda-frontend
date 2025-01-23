import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import type { Meta, StoryObj } from '@storybook/react';

import { MyPageContainerForStory } from './MyPageStoryLayout';

import MyToolPage from '../MyToolPage';

const meta: Meta<typeof MyToolPage> = {
  title: 'Pages/MyPage/FavoriteToolPage',
  component: MyToolPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header forOnboarding={false} />
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
