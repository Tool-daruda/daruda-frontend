import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import type { Meta, StoryObj } from '@storybook/react';

import { MyPageContainerForStory } from './MyPageStoryLayout';

import MyInfoPage from '../MyInfoPage';

const headerState: HeaderState = HEADER_STATE.LOGGED_IN;

const meta: Meta<typeof MyInfoPage> = {
  title: 'Pages/MyPage/MyInfoPage',
  component: MyInfoPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header headerState={headerState} />
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
