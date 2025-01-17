import { Half, Free, Paid } from '@assets/svgs';

export const getLicenseBadgeContent = (license: string) => {
  switch (license) {
    case 'PAID':
      return { icon: <Paid />, text: '유료' };
    case 'FREE':
      return { icon: <Free />, text: '무료' };
    case 'HALFFREE':
      return { icon: <Half />, text: '부분 유료' };
    default:
      return { icon: null, text: '' };
  }
};
