import {theme} from "@chakra-ui/react"

const customTheme = {
  ...theme,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "Poppins, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
    black: 800,
    extrabold: 900,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  fontSizes: {
    ...theme.fontSizes,
    "6xl": "54px",
  },
  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      500: '#8257e5',
    },
    gray: {
      ...theme.colors.gray,
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214'
    },
  }, 
}

export default customTheme;