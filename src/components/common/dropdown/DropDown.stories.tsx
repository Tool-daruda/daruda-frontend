import { IcOverflowGray44, IcOverflowGray24 } from '@assets/svgs';
import type { Meta, StoryFn } from '@storybook/react';

import DropDown from './DropDown';

const meta = {
  title: 'Components/DropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { table: { disable: true } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropDown>;

export default meta;

const DropDownTemplate: StoryFn<typeof DropDown> = (args) => {
  return (
    <div style={{ width: '180px' }}>
      <DropDown {...args} />
    </div>
  );
};

export const Single = DropDownTemplate.bind({});
Single.args = {
  children: (
    <>
      <DropDown.ToggleBtn>
        <IcOverflowGray44 />
      </DropDown.ToggleBtn>
      <DropDown.Content>
        <DropDown.Item
          onClick={() => {
            alert('클릭!');
          }}
        >
          드롭다운 목록
        </DropDown.Item>
      </DropDown.Content>
    </>
  ),
};

export const LeftList = DropDownTemplate.bind({});
LeftList.args = {
  position: 'start',
  children: (
    <>
      <DropDown.ToggleBtn>
        <IcOverflowGray44 />
      </DropDown.ToggleBtn>
      <DropDown.Content>
        <DropDown.Item
          onClick={() => {
            alert('첫번째 클릭!');
          }}
        >
          드롭다운 목록
        </DropDown.Item>
        <DropDown.Item
          status="danger"
          onClick={() => {
            alert('두번째 클릭!');
          }}
        >
          드롭다운 목록
        </DropDown.Item>
      </DropDown.Content>
    </>
  ),
};

export const RightList = DropDownTemplate.bind({});
RightList.args = {
  position: 'end',
  children: (
    <>
      <DropDown.ToggleBtn>
        <IcOverflowGray44 />
      </DropDown.ToggleBtn>
      <DropDown.Content>
        <DropDown.Item
          onClick={() => {
            alert('첫번째 클릭!');
          }}
        >
          드롭다운 목록
        </DropDown.Item>
        <DropDown.Item
          status="danger"
          onClick={() => {
            alert('두번째 클릭!');
          }}
        >
          드롭다운 목록
        </DropDown.Item>
      </DropDown.Content>
    </>
  ),
};

export const TopList = DropDownTemplate.bind({});
TopList.args = {
  children: (
    <>
      <DropDown.Content>
        <DropDown.Item
          onClick={() => {
            alert('첫번째 클릭!');
          }}
        >
          드롭다운 목록
        </DropDown.Item>
        <DropDown.Item
          status="danger"
          onClick={() => {
            alert('두번째 클릭!');
          }}
        >
          드롭다운 목록
        </DropDown.Item>
      </DropDown.Content>
      <DropDown.ToggleBtn>
        <IcOverflowGray44 />
      </DropDown.ToggleBtn>
    </>
  ),
};

export const miniToggleList = DropDownTemplate.bind({});
miniToggleList.args = {
  children: (
    <>
      <DropDown.ToggleBtn>
        <IcOverflowGray24 />
      </DropDown.ToggleBtn>
      <DropDown.Content>
        <DropDown.Item
          onClick={() => {
            alert('첫번째 클릭!');
          }}
        >
          드롭다운 목록
        </DropDown.Item>
        <DropDown.Item
          status="danger"
          onClick={() => {
            alert('두번째 클릭!');
          }}
        >
          드롭다운 목록
        </DropDown.Item>
      </DropDown.Content>
    </>
  ),
};
