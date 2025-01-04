import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     <ThemeProvider theme={theme}>
  //       <GlobalStyle />
  //       <Story />
  //     </ThemeProvider>
  //   ),
  // ],
};

export default preview;
