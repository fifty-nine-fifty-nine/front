import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { themeVars } from './tokens.css';

export const spaceProperties = defineProperties({
  properties: {
    margin: themeVars.spaces,
    marginTop: themeVars.spaces,
    marginRight: themeVars.spaces,
    marginBottom: themeVars.spaces,
    marginLeft: themeVars.spaces,
    padding: themeVars.spaces,
    paddingTop: themeVars.spaces,
    paddingRight: themeVars.spaces,
    paddingBottom: themeVars.spaces,
    paddingLeft: themeVars.spaces,
  },
  shorthands: {
    m: ['margin'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
  },
});

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
  },
  shorthands: {
    placeItems: ['justifyContent', 'alignItems'],
  },
});

const colorProperties = defineProperties({
  properties: {
    color: themeVars.colors,
    background: themeVars.backgroundColors,
  },
});

export const textProperties = defineProperties({
  properties: {
    fontWeight: themeVars.fontWeights,
    fontSize: themeVars.fontSizes,
  },
});

export const borderProperties = defineProperties({
  properties: {
    borderColor: themeVars.colors,
  },
});

export const sprinkles = createSprinkles(
  spaceProperties,
  responsiveProperties,
  colorProperties,
  textProperties,
  borderProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
