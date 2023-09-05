// stitches.config.ts
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',

      gray0: '#ffffff',
      gray100: '#f2f5f8',
      gray200: '#e2e7ec',
      gray300: '#c6cfd7',
      gray400: '#9099a6',
      gray500: '#5f666d',
      gray600: '#42464a',
      gray700: '#2e3438',
      gray800: '#20262b',
      gray900: '#181d21',

      warning0: '#ffffff',
      warning100: '#ffcaca',
      warning200: '#fda6a6',
      warning300: '#fb8383',
      warning400: '#f86060',
      warning500: '#f63a3a',
      warning600: '#d02b2b',
      warning700: '#aa1c1c',
      warning800: '#860e0e',
      warning900: '#440000',

      caution0: '#ffffff',
      caution100: '#fff0bb',
      caution200: '#ffe896',
      caution300: '#ffdf6f',
      caution400: '#ffd74b',
      caution500: '#ffd224',
      caution600: '#d6a90a',
      caution700: '#ae8709',
      caution800: '#735403',
      caution900: '#3f2900',

      accept0: '#ffffff',
      accept100: '#cbeadb',
      accept200: '#a5ddc4',
      accept300: '#7bcfab',
      accept400: '#52c192',
      accept500: '#27b278',
      accept600: '#1e9060',
      accept700: '#0c4e30',
      accept800: '#0c4e30',
      accept900: '#032c18',

      primary0: '#ffffff',
      primary100: '#e8c8f6',
      primary200: '#d6a4ed',
      primary300: '#c47fe4',
      primary400: '#af57d9',
      primary500: '#9b2ecf',
      primary600: '#8929b7',
      primary700: '#76249e',
      primary800: '#621e83',
      primary900: '#4f1969',

      secondary0: '#ffffff',
      secondary100: '#fcbddb',
      secondary200: '#f48db7',
      secondary300: '#ec669a',
      secondary400: '#e43475',
      secondary500: '#e1115c',
      secondary600: '#b71451',
      secondary700: '#9f134a',
      secondary800: '#871244',
      secondary900: '#6f113d',
    },
    shadows: {
      grade1: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      grade2: '0px 0px 8px 0px rgba(0, 0, 0, 0.25)',
      grade3: '0px 0px 12px 0px rgba(0, 0, 0, 0.25)',
      grade4: '0px 0px 16px 0px rgba(0, 0, 0, 0.25)',
    },
    fontWeights: {
      thin: '100',
      extraLight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
      black: '900',
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    gray0: '#20262b',
    gray100: '#181d21',
    gray200: '#42464a',
    gray300: '#5f666d',
    gray400: '#9099a6',
    gray500: '#c6cfd7',
    gray600: '#e2e7ec',
    gray700: '#f2f5f8',
    gray800: '#ffffff',
    gray900: '#ffffff',

    warning0: '#000000',
    warning100: '#440000',
    warning200: '#860e0e',
    warning300: '#aa1c1c',
    warning400: '#d02b2b',
    warning500: '#f63a3a',
    warning600: '#f86060',
    warning700: '#fb8383',
    warning800: '#fda6a6',
    warning900: '#ffcaca',

    caution0: '#000000',
    caution100: '#3f2900',
    caution200: '#735403',
    caution300: '#ae8709',
    caution400: '#d6a90a',
    caution500: '#ffd224',
    caution600: '#ffd74b',
    caution700: '#ffdf6f',
    caution800: '#ffe896',
    caution900: '#fff0bb',

    accept0: '#000000',
    accept100: '#032c18',
    accept200: '#0c4e30',
    accept300: '#156e48',
    accept400: '#1e9060',
    accept500: '#27b278',
    accept600: '#52c192',
    accept700: '#7bcfab',
    accept800: '#a5ddc4',
    accept900: '#cbeadb',

    primary0: '#000000',
    primary100: '#6f113d',
    primary200: '#871244',
    primary300: '#9f134a',
    primary400: '#b71451',
    primary500: '#e1115c',
    primary600: '#e43475',
    primary700: '#ec669a',
    primary800: '#f48db7',
    primary900: '#fcbddb',

    secondary0: '#000000',
    secondary100: '#4f1969',
    secondary200: '#621e83',
    secondary300: '#9b2ecf',
    secondary400: '#af57d9',
    secondary500: '#c47fe4',
    secondary600: '#76249e',
    secondary700: '#8929b7',
    secondary800: '#d6a4ed',
    secondary900: '#e8c8f6',
  },
  shadows: {
    grade1: '0px 0px 4px 0px rgba(255, 255, 255, 0.25)',
    grade2: '0px 0px 8px 0px rgba(255, 255, 255, 0.25)',
    grade3: '0px 0px 12px 0px rgba(255, 255, 255, 0.25)',
    grade4: '0px 0px 16px 0px rgba(255, 255, 255, 0.25)',
  },
});

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    fontFamily: 'SUIT, sans-serif',
    transitionProperty:
      'color, background-color, border, box-shadow, fill, stop-color',
    transitionDuration: '0.15s',
    color: '$gray900',
    wordBreak: 'keep-all',
  },
  'html, body, #root': {
    margin: 0,
    padding: 0,
    backgroundColor: '$gray0',
    width: '100%',
    height: '100%',
    fontSize: '16px',
  },
  'body, #root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
