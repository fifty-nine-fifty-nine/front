import { style } from '@vanilla-extract/css';

export const userProfileCircle = style({
  overflow: 'hidden',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
});

export const userProfileImage = style({
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});
