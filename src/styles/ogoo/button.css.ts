import { recipe } from '@vanilla-extract/recipes';

import { bgKakao, bgOptional, bgPrimary, bgSecondary, bgSub } from '.';

export const button = recipe({
  base: {
    display: 'block',
  },

  variants: {
    color: {
      primary: bgPrimary,
      secondary: bgSecondary,
      sub: bgSub,
      optional: bgOptional,
      kakao: bgKakao,
    },
    size: {
      xs: { padding: '6px 12px', borderRadius: 18 },
      sm: { height: 36, borderRadius: 8.5, fontSize: 12, fontWeight: 700 },
      md: { width: '100%', height: 45, borderRadius: 6, fontSize: 14 },
      lg: { width: '100%', height: 60, borderRadius: 12, fontSize: 18, fontWeight: 700 },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'lg',
  },
});