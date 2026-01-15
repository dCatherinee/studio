import type { Preview } from "@storybook/react-webpack5";
import { BrowserRouter } from "react-router-dom";
import "../src/app/styles/index.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <BrowserRouter>
        <div className="storybook light">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export default preview;
