import type { Preview } from '@storybook/react-vite'
import "../src/index.css"
import { ThemeProvider } from '../src/providers/Theme-provider';

const preview: Preview = {

  //Theme wrapping for Component stories
   decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      return (
        <ThemeProvider defaultTheme={theme}>
          <div className={theme === "dark" ? "dark" : ""}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],

  //Toolbar creation for theme switch
  globalTypes: {
    theme: {
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        items: [
          {value: "light", title: "Light"},
          {value: "dark", title: "Dark"}
        ],
      },
    },
  },

  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
      docs: {
        autodocs: "tags"
      }
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;