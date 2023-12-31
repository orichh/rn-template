import { createTheme } from "@shopify/restyle";

const palette = {
  white: "#FFFFFF",
  primaryBlue: "#347AF0",
  green: "#75BF72",
  red: "#DF5060",
  yellow: "#FDB32A",
  midnightBlue: "#0D1F3C",
  lightBlue: "#EDF1F9",
  darkGray: "#3D4C63",
  gray: "#B5BBC9",
  lightGray: "#CFD2D8",
  primaryBgDark: "#121212",
  secondaryBgDark: "#2F2F2F",
  transparent: "transparent",
  overlay: "rgba(0, 0, 0, 0.5)",
};

const theme = createTheme({
  colors: {
    bgPrimary: palette.lightBlue,
    bgSecondary: palette.white,
    bgPrimaryBlue: palette.primaryBlue,
    titleHeadline: palette.midnightBlue,
    paragraph: palette.darkGray,
    label: palette.gray,
    disabled: palette.lightGray,
    accent: palette.primaryBlue,
    success: palette.green,
    error: palette.red,
    neutral: palette.yellow,
    inputActive: palette.primaryBlue,
    inputInactive: palette.lightGray,
    white: palette.white,
    primaryBlue: palette.primaryBlue,
    green: palette.green,
    red: palette.red,
    yellow: palette.yellow,
    midnightBlue: palette.midnightBlue,
    lightBlue: palette.lightBlue,
    darkGray: palette.darkGray,
    gray: palette.gray,
    lightGray: palette.lightGray,
    transparent: palette.transparent,
    overlay: palette.overlay,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    "2xl": 40,
    "3xl": 48,
    "4xl": 56,
    "5xl": 64,
    "6xl": 72,
    "7xl": 80,
    "8xl": 88,
    "9xl": 96,
    "10xl": 104,
    "11xl": 112,
    "12xl": 120,
  },
  textVariants: {
    h1Light: {
      fontFamily: "TitilliumWeb-Light",
      fontSize: 48,
      lineHeight: 54,
    },
    h1: {
      fontFamily: "TitilliumWeb-Bold",
      fontSize: 36,
      lineHeight: 45,
      color: "titleHeadline",
    },
    h2: {
      fontFamily: "TitilliumWeb-SemiBold",
      fontSize: 32,
      lineHeight: 32,
      color: "titleHeadline",
    },
    h3Regular: {
      fontFamily: "TitilliumWeb-Regular",
      fontSize: 28,
      lineHeight: 54,
    },
    h3: {
      fontFamily: "TitilliumWeb-SemiBold",
      fontSize: 26,
      lineHeight: 32,
      color: "titleHeadline",
    },
    sublime: {
      fontFamily: "TitilliumWeb-Regular",
      fontSize: 19,
      lineHeight: 24,
    },
    sublimeSemiBold: {
      fontFamily: "TitilliumWeb-SemiBold",
      fontSize: 19,
      lineHeight: 24,
    },
    paragraph: {
      fontFamily: "TitilliumWeb-Regular",
      fontSize: 15,
      lineHeight: 24,
      color: "paragraph",
    },
    label: {
      fontFamily: "TitilliumWeb-SemiBold",
      fontSize: 15,
      lineHeight: 24,
      color: "label",
    },
    link: {
      fontFamily: "TitilliumWeb-SemiBold",
      fontSize: 15,
      lineHeight: 24,
      color: "accent",
    },
    fineprint: {
      fontFamily: "TitilliumWeb-SemiBold",
      fontSize: 13,
      lineHeight: 24,
    },
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 20,
    full: 99,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    bgPrimary: palette.primaryBgDark,
    bgSecondary: palette.secondaryBgDark,
    titleHeadline: palette.gray,
    paragraph: palette.gray,
  },
};

export { darkTheme, theme };
