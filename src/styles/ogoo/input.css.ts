import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '..';

export const input = recipe({
  base: {
    display: 'block',
    width: '100%',
    borderRadius: 12,
    fontSize: 18,
    fontWeight: 500,
    border: `2px solid ${themeVars.colors.input}`,
    padding: 20,
    ':focus': {
      border: `2px solid ${themeVars.colors.primarySub}`,
    },
    outline: 'none',
    transition: `all 0.15s ease-in-out`,
    selectors: {
      '&:hover, &:focus': {
        backgroundColor: `${themeVars.backgroundColors.optional}`,
      },
    },
  },

  variants: {
    color: {
      inputColor: themeVars.colors.input,
    },
    line: {
      single: {
        height: 60,
      },
      multiple: {
        height: 180,
      },
    },
  },

  defaultVariants: {
    color: 'inputColor',
    line: 'single',
  },
});
