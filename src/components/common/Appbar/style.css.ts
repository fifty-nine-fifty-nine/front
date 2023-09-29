import { style } from '@vanilla-extract/css';

import { APPBAR_HEIGHT } from '@/constants';
import { flexCenter } from '@/styles/ogoo/alignment.css';
import { titleSm } from '@/styles/ogoo/typography.css';

export const appbar = style([
  flexCenter,
  {
    position: 'relative',
    width: '100%',
    height: `${APPBAR_HEIGHT}px`,
    padding: '20px',
    backgroundColor: 'white',
  },
]);

export const verticalCenter = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const popWrapper = style([
  verticalCenter,
  {
    left: '12px',
    height: '32px',
  },
]);

export const appbarTitle = style([
  titleSm,
  {
    display: 'block',
    flex: 1,
    textAlign: 'center',
  },
]);

export const actionWrapper = style([
  verticalCenter,
  {
    right: '20px',
  },
]);
