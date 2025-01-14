import theme from '@styles/theme';

export const chipColors: Record<
  string,
  {
    color: keyof typeof theme.colors;
    borderColor?: keyof typeof theme.colors;
    backgroundColor?: keyof typeof theme.colors;
  }
> = {
  roundChip: {
    color: 'iris1',
    backgroundColor: 'iris2',
  },
  rectChip: {
    color: 'iris1',
    borderColor: 'iris2',
  },
  categoryChip: {
    color: 'white1',
    backgroundColor: 'iris1',
  },
};
