import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import {
  bgKakao,
  bgOptional,
  bgPrimary,
  bgPrimarySub,
  bgSecondary,
  bgSecondarySub,
  bgSelected,
  bgSub,
  bgTertiary,
} from './colors.css';

export const button = recipe({
  base: {
    display: 'block',
  },

  variants: {
    color: {
      primary: bgPrimary,
      primarySub: bgPrimarySub,
      secondary: bgSecondary,
      secondarySub: bgSecondarySub,
      tertiary: bgTertiary,
      sub: bgSub,
      optional: bgOptional,
      kakao: bgKakao,
      selected: bgSelected,
    },
    size: {
      xxs: { padding: '4px 12px', borderRadius: 8, fontSize: 13 },
      xs: { padding: '6px 12px', borderRadius: 18 },
      sm: { height: 36, borderRadius: 8.5, fontSize: 12, fontWeight: 500 },
      md: { width: '100%', height: 45, borderRadius: 6, fontSize: 14 },
      lg: { width: '100%', height: 60, borderRadius: 12, fontSize: 18, fontWeight: 500 },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'lg',
  },
});

export const buttonHover = style({
  transition: 'all 200 ease-in-out',
  ':hover': {
    opacity: '90%',
  },
});
