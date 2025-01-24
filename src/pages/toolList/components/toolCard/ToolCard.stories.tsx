import type { Meta } from '@storybook/react';

import ToolCard from './ToolCard';

export default {
  title: 'Components/ToolCard',
  component: ToolCard,
} as Meta;

export const Default = () => (
  <ToolCard selectedCategory="AI" isFree={false} criteria="popular" onCategoryChange={() => alert('클릭')} />
);
