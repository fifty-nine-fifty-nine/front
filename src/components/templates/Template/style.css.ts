import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { APPBAR_HEIGHT, NAVBAR_HEIGHT } from '@/constants';

export const contentWrapper = style({
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'auto',
});

export type OptionVar = 'both' | 'default' | 'appbar' | 'navbar';

export const viewportHeight = styleVariants({
  both: { height: calc.subtract('100vh', `${+APPBAR_HEIGHT + +NAVBAR_HEIGHT}px`) },
  appbar: { height: calc.subtract('100vh', `${APPBAR_HEIGHT}px`) },
  navbar: { height: calc.subtract('100vh', `${NAVBAR_HEIGHT}px`) },
  default: { height: '100vh' },
});
