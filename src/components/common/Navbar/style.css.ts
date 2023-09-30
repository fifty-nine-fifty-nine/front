import { style } from '@vanilla-extract/css';

import { NAVBAR_HEIGHT } from '@/constants';
import { themeVars } from '@/styles';
import { flexColCenter, flexRowCenter } from '@/styles/ogoo/alignment.css';
import { primary } from '@/styles/ogoo/colors.css';
import { caption } from '@/styles/ogoo/typography.css';

export const navbar = style([
  flexRowCenter,
  {
    width: '100%',
    height: `${NAVBAR_HEIGHT}px`,
    backgroundColor: 'white',
    borderTop: '1px solid',
    borderTopColor: themeVars.colors.divider,
  },
]);

export const navbarMenu = style([
  flexColCenter,
  caption,
  {
    height: '100%',
    padding: '20px',
    ':hover': {
      backgroundColor: themeVars.backgroundColors.optional,
    },
    transition: 'all 0.3s ease-in-out',
    userSelect: 'none',
  },
]);

export const activeText = style([
  primary,
  {
    fontWeight: 600,
  },
]);
