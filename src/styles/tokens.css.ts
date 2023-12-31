import { createTheme } from '@vanilla-extract/css';

const primary = '#7082FF';
const primarySub = '#AEB8FF';
const primaryOptional = '#E9ECFF';
const primaryActive = '#492FA5';

const secondary = '#1BD689';
const secondarySub = '#8CEAC3';
const secondaryActive = '#00643B';

const tertiary = '#6C757D';
const tertiarySub = '#C7CDD2';
const tertiaryOptional = '#E9ECEF';

const danger = '#FF0000';
const dangerSub = '#FF5555';
const dangerOptional = '#FFD4D4';
const kakao = '#FEE500';
const black = '#000000';
const white = '#FFFFFF';
const grayScale = {
  w700: '#212529',
  w600: '#343A40',
  w500: '#6C757D',
  w400: '#A2AAB2',
  w300: '#C7CDD2',
  w200: '#DEE2E6',
  w100: '#E9ECEF',
  w50: '#F0F2F4',
  w0: '#F8F9FA',
};

export const [themeClass, themeVars] = createTheme({
  colors: {
    primary: primary,
    primarySub: primarySub,
    primaryOptional: primaryOptional,
    primaryActive: primaryActive,
    secondary: secondary,
    secondarySub: secondarySub,
    secondaryActive: secondaryActive,
    tertiary: tertiary,
    tertiarySub: tertiarySub,
    tertiaryOptional: tertiaryOptional,
    danger: danger,
    dangerSub: dangerSub,
    dangerOptional: dangerOptional,
    blackText: black,
    whiteText: white,
    subtitleText: grayScale.w600,
    subText: grayScale.w500,
    optionalText: grayScale.w400,
    input: grayScale.w300,
    divider: grayScale.w100,
  },
  backgroundColors: {
    primary: primary,
    primarySub: primarySub,
    primaryOptional: primaryOptional,
    primaryActive: primaryActive,
    secondary: secondary,
    secondarySub: secondarySub,
    secondaryActive: secondaryActive,
    tertiary: tertiary,
    tertiarySub: tertiarySub,
    tertiaryOptional: tertiaryOptional,
    danger: danger,
    dangerSub: dangerSub,
    dangerOptional: dangerOptional,
    white: white,
    black: black,
    sub: grayScale.w100,
    optional: grayScale.w50,
    kakao: kakao,
    selected: tertiarySub,
  },
  spaces: {
    auto: 'auto',
    '0': '0',
    '4': '4px',
    '8': '8px',
    '12': '12px',
    '16': '16px',
    '20': '20px',
    '24': '24px',
  },
  fontWeights: {
    light: '300',
    semibold: '500',
    bold: '600',
  },
  fontSizes: {
    '12': '12px',
    '13': '13px',
    '14': '14px',
    '16': '16px',
    '18': '18px',
    '20': '20px',
    '22': '22px',
    '26': '26px',
    '28': '28px',
    '32': '32px',
  },
});
