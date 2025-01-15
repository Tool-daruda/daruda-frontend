import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu';

const meta = {
  title: 'Components/MyPageMenu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { table: { disable: true } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isActive: false,
    isWarning: false,
    children: <>관심있는 툴</>,
    onClick: () => alert('클릭!'),
  },
};

const Wrapper = styled.div`
  position: relative;

  *::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.4rem;
    height: 5rem;

    background-color: ${({ theme }) => theme.colors.iris1};
  }
`;

export const Active: Story = {
  args: {
    isActive: true,
    isWarning: false,
    children: <>관심있는 툴</>,
    onClick: () => alert('클릭!'),
  },
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export const Logout: Story = {
  args: {
    isActive: false,
    isWarning: true,
    children: <>로그아웃</>,
    onClick: () => alert('로그아웃'),
  },
};
