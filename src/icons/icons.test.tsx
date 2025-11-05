import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Icon } from "./Icon";
import { iconData } from "./data";
import {
  UserIcon,
  SkullCrossbonesIcon,
  CircleInfoIcon,
  ThumbsUpIcon,
  TriangleExclamationIcon,
} from "./index";

describe("Icon (Generic Component)", () => {
  describe("Rendering", () => {
    it("renders icon by name", () => {
      const { container } = render(<Icon name="user" />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders all icons without errors", () => {
      Object.keys(iconData).forEach((iconName) => {
        const { container } = render(<Icon name={iconName as any} />);
        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });

    it("renders path elements", () => {
      const { container } = render(<Icon name="user" />);
      expect(container.querySelector("path")).toBeInTheDocument();
    });

    it("returns null for invalid icon name", () => {
      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      const { container } = render(<Icon name={"invalid" as any} />);
      expect(container.querySelector("svg")).not.toBeInTheDocument();
      expect(consoleSpy).toHaveBeenCalledWith('Icon "invalid" not found');
      consoleSpy.mockRestore();
    });
  });

  describe("Props", () => {
    it("applies size prop", () => {
      const { container } = render(<Icon name="user" size="large" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", "32");
      expect(svg).toHaveAttribute("height", "32");
    });

    it("applies color prop", () => {
      const { container } = render(<Icon name="user" color="#ff0000" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("fill", "#ff0000");
    });

    it("applies default viewBox", () => {
      const { container } = render(<Icon name="user" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("applies custom viewBox", () => {
      const { container } = render(<Icon name="user" viewBox="0 0 100 100" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("viewBox", "0 0 100 100");
    });

    it("forwards all Svg props", () => {
      const { container } = render(
        <Icon name="user" rotate={90} flip="horizontal" />
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("marduk-svg--rotate-90");
      expect(svg).toHaveClass("marduk-svg--flip-horizontal");
    });
  });

  describe("Multi-path Icons", () => {
    it("renders user icon with multiple paths", () => {
      const { container } = render(<Icon name="user" />);
      const paths = container.querySelectorAll("path");
      expect(paths.length).toBe(2);
    });
  });
});

describe("Individual Icon Components", () => {
  const iconComponents = [
    {
      name: "UserIcon",
      Component: UserIcon,
      expectedViewBox: "0 0 24 24",
      expectedPathCount: 2,
      testColor: "blue",
    },
    {
      name: "SkullCrossbonesIcon",
      Component: SkullCrossbonesIcon,
      expectedViewBox: "0 0 640 640",
      expectedPathCount: 1,
      testColor: "red",
    },
    {
      name: "CircleInfoIcon",
      Component: CircleInfoIcon,
      expectedViewBox: "0 0 640 640",
      expectedPathCount: 1,
      testColor: "blue",
    },
    {
      name: "ThumbsUpIcon",
      Component: ThumbsUpIcon,
      expectedViewBox: "0 0 640 640",
      expectedPathCount: 1,
      testColor: "green",
    },
    {
      name: "TriangleExclamationIcon",
      Component: TriangleExclamationIcon,
      expectedViewBox: "0 0 640 640",
      expectedPathCount: 1,
      testColor: "orange",
    },
  ];

  iconComponents.forEach(
    ({ name, Component, expectedViewBox, expectedPathCount, testColor }) => {
      describe(name, () => {
        it("renders correctly", () => {
          const { container } = render(<Component />);
          expect(container.querySelector("svg")).toBeInTheDocument();
        });

        it(`renders with viewBox ${expectedViewBox}`, () => {
          const { container } = render(<Component />);
          const svg = container.querySelector("svg");
          expect(svg).toHaveAttribute("viewBox", expectedViewBox);
        });

        it(`renders ${expectedPathCount} path element(s)`, () => {
          const { container } = render(<Component />);
          const paths = container.querySelectorAll("path");
          expect(paths.length).toBe(expectedPathCount);
        });

        it("accepts size prop", () => {
          const { container } = render(<Component size="large" />);
          const svg = container.querySelector("svg");
          expect(svg).toHaveAttribute("width", "32");
          expect(svg).toHaveAttribute("height", "32");
        });

        it("accepts color prop", () => {
          const { container } = render(<Component color={testColor} />);
          const svg = container.querySelector("svg");
          expect(svg).toHaveAttribute("fill", testColor);
        });

        it("supports rotation", () => {
          const { container } = render(<Component rotate={90} />);
          const svg = container.querySelector("svg");
          expect(svg).toHaveClass("marduk-svg--rotate-90");
        });

        it("supports flip transformations", () => {
          const { container } = render(<Component flip="horizontal" />);
          const svg = container.querySelector("svg");
          expect(svg).toHaveClass("marduk-svg--flip-horizontal");
        });
      });
    }
  );
});

describe("Accessibility", () => {
  it("supports title prop", () => {
    const { container } = render(<Icon name="user" title="User Profile" />);
    expect(container.querySelector("title")).toHaveTextContent("User Profile");
  });

  it("supports description prop", () => {
    const { container } = render(
      <Icon name="user" description="View user profile" />
    );
    expect(container.querySelector("desc")).toHaveTextContent(
      "View user profile"
    );
  });

  it("supports decorative prop", () => {
    const { container } = render(<Icon name="user" decorative />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
});

describe("All Icons Rendering", () => {
  it("all icons in iconData render without errors", () => {
    const iconNames = Object.keys(iconData);
    expect(iconNames.length).toBeGreaterThan(0);

    iconNames.forEach((name) => {
      const { container } = render(<Icon name={name as any} />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });
  });
});
