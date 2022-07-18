import { extendTheme, ChakraProvider, withDefaultColorScheme } from '@chakra-ui/react';

const TestTheme = {
  colors: {
    test: {
      50: '#F5FEFF',
      75: '#DEF8FF',
      100: '#DEF8FF',
      200: '#85D9FD',
      300: '#4BB2F6',
      400: '#157EEA',
      500: '#0050D7',
      600: '#002DBE',
      700: '#000E9C',
      800: '#00185E',
      900: '#000D1F',
    },
  },
  defaultProps: {
    size: 'lg', // default is md
    variant: 'sm', // default is solid
    colorScheme: 'test', // default is gray
  },
};
const theme = extendTheme(
  TestTheme,
  withDefaultColorScheme({ colorScheme: 'test' }),
);
console.log(TestTheme);

export const decorators = [(Story) => (
  <ChakraProvider theme={theme}>
    <Story />
  </ChakraProvider>
)]

export const parameters = {
  chakra: {
    theme,
  }
};
