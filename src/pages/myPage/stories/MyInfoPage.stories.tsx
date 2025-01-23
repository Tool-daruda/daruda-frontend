import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import type { Meta, StoryObj } from '@storybook/react';

import { MyPageContainerForStory } from './MyPageStoryLayout';

import MyInfoPage from '../MyInfoPage';

const meta: Meta<typeof MyInfoPage> = {
  title: 'Pages/MyPage/MyInfoPage',
  component: MyInfoPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header forOnboarding={false} />
        <MyPageContainerForStory activeMenu={1}>
          <Story />
        </MyPageContainerForStory>
        <Footer />
      </>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MyInfoPage>;

export const Default: Story = {};
