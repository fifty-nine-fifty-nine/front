import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '..';
import * as C from './colors.css';
import { bodyMd } from './typography.css';

export const button = recipe({
  base: {
    display: 'block',
  },

  variants: {
    color: {
      primary: C.bgPrimary,
      primarySub: C.bgPrimarySub,
      secondary: C.bgSecondary,
      secondarySub: C.bgSecondarySub,
      tertiary: C.bgTertiary,
      sub: C.bgSub,
      optional: C.bgOptional,
      kakao: C.bgKakao,
      selected: C.bgSelected,
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
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    opacity: '90%',
  },
});

export const modalButton = style([
  bodyMd,
  buttonHover,
  {
    display: 'inline-flex',
    justifyContent: 'center',
    width: '100%',
    padding: '8px 16px',
    borderRadius: '8px',
  },
]);

export const filled = style([
  {
    color: themeVars.colors.whiteText,
    backgroundColor: themeVars.backgroundColors.primary,
    fontWeight: themeVars.fontWeights.semibold,
  },
]);

export const outlined = style([
  C.primary,
  {
    border: `1px solid ${themeVars.colors.primary}`,
    fontWeight: themeVars.fontWeights.semibold,
    ':hover': {
      backgroundColor: themeVars.backgroundColors.primaryOptional,
    },
  },
]);

export const textOnly = style([
  C.optionalText,
  {
    ':hover': {
      backgroundColor: themeVars.backgroundColors.optional,
    },
  },
]);
