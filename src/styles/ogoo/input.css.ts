import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '..';

export const input = recipe({
  base: {
    display: 'block',
  },

  variants: {
    color: {
      inputColor: themeVars.colors.input,
    },
    line: {
      single: {
        width: '100%',
        height: 60,
        borderRadius: 12,
        fontSize: 18,
        fontWeight: 500,
        border: `solid ${themeVars.colors.input}`,
        padding: 20,
      },
    },
  },

  defaultVariants: {
    color: 'inputColor',
    line: 'single',
  },
});
