import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.white2};
`;

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout/Layout',
  component: Layout,

  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
  - 로고 클릭: 온보딩 페이지로 이동
  - 카테고리 클릭: 카테고리 박스 표시
  - 커뮤니티 클릭: 커뮤니티로 이동
  - 로그인/회원가입 클릭: 로그인 페이지로 이동
          `,
      },
    },
  },
  decorators: [
    () => {
      return (
        <Layout>
          <Header forOnboarding={false} />
          <Content />
          <Footer />
        </Layout>
      );
    },
  ],
};
