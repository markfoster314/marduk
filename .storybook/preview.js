import "../src/styles/variables.css";

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },

    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "375px", height: "667px" },
        },
        tablet: {
          name: "Tablet (768px)",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop (1024px)",
          styles: { width: "1024px", height: "768px" },
        },
      },
    },

    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1a1a" },
        { name: "gray", value: "#f5f5f5" },
      ],
    },

    layout: "centered",

    docs: {
      toc: true,
    },

    options: {
      storySort: {
        order: ["Components", "Compositions", "Icons", "*"],
      },
    },
  },
};

export default preview;
