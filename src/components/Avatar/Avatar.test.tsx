import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "./Avatar";
import { defineAvatarPresets, resetCustomPresets } from "./presets";

describe("Avatar", () => {
  describe("Core", () => {
    it("renders with base class and default size", () => {
      render(<Avatar alt="Test user" />);
      const avatar = screen.getByRole("img", { name: "Test user" });
      expect(avatar).toBeInTheDocument();
      expect(avatar.tagName).toBe("DIV");
      expect(avatar).toHaveClass("marduk-avatar");
      expect(avatar).toHaveClass("marduk-avatar--size-medium");
      expect(avatar).toHaveClass("marduk-avatar--shape-circle");
    });

    it("generates initials from alt text", () => {
      render(<Avatar alt="John Doe" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("generates initials from single name", () => {
      render(<Avatar alt="John" />);
      expect(screen.getByText("JO")).toBeInTheDocument();
    });
  });

  describe("Props", () => {
    test.each([
      ["xs", "marduk-avatar--size-xs"],
      ["small", "marduk-avatar--size-small"],
      ["medium", "marduk-avatar--size-medium"],
      ["large", "marduk-avatar--size-large"],
      ["xl", "marduk-avatar--size-xl"],
    ] as const)("applies %s size", (size, expectedClass) => {
      render(<Avatar alt="Test" size={size} />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveClass(expectedClass);
      expect(avatar).toHaveAttribute("data-size", size);
    });

    test.each([
      ["circle", "marduk-avatar--shape-circle"],
      ["square", "marduk-avatar--shape-square"],
      ["rounded", "marduk-avatar--shape-rounded"],
    ] as const)("applies %s shape", (shape, expectedClass) => {
      render(<Avatar alt="Test" shape={shape} />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveClass(expectedClass);
      expect(avatar).toHaveAttribute("data-shape", shape);
    });

    test.each([
      ["online", "marduk-avatar__status--online"],
      ["offline", "marduk-avatar__status--offline"],
      ["busy", "marduk-avatar__status--busy"],
      ["away", "marduk-avatar__status--away"],
    ] as const)("applies %s status", (status, expectedClass) => {
      render(<Avatar alt="Test" status={status} />);
      const statusIndicator = document.querySelector(`.${expectedClass}`);
      expect(statusIndicator).toBeInTheDocument();
      expect(statusIndicator).toHaveAttribute("aria-label", `Status: ${status}`);
    });

    it("displays image when src provided", () => {
      render(<Avatar src="avatar.jpg" alt="Test" />);
      const image = document.querySelector(".marduk-avatar__image");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "avatar.jpg");
    });

    it("displays custom initials when provided", () => {
      render(<Avatar alt="Test" initials="AB" />);
      expect(screen.getByText("AB")).toBeInTheDocument();
    });

    it("displays initials when alt provided", () => {
      render(<Avatar alt="Test User" />);
      expect(screen.getByText("TU")).toBeInTheDocument();
    });
  });

  describe("Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    test.each([["primary"], ["success"], ["danger"]] as const)("applies %s preset", (preset) => {
      render(<Avatar alt="Test" preset={[preset]} />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveAttribute("data-preset", preset);
      expect(avatar).toHaveClass(`marduk-avatar--${preset}`);
    });

    it("props override presets", () => {
      render(<Avatar alt="Test" preset={["primary"]} size="large" />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveClass("marduk-avatar--size-large");
    });

    it("merges multiple presets", () => {
      defineAvatarPresets({
        base: { size: "small" },
        override: { size: "large" },
      });
      render(<Avatar alt="Test" preset={["base", "override"]} />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveClass("marduk-avatar--size-large");
    });

    it("deep merges style objects from presets", () => {
      defineAvatarPresets({
        style1: { style: { opacity: "0.8" } as React.CSSProperties },
        style2: { style: { "--avatar-bg": "red" } as React.CSSProperties },
      });
      render(<Avatar alt="Test" preset={["style1", "style2"]} />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveStyle({ opacity: "0.8", "--avatar-bg": "red" });
    });

    it("supports custom presets", () => {
      defineAvatarPresets({ premium: { size: "large" } });
      render(<Avatar alt="Test" preset={["premium"]} />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveClass("marduk-avatar--size-large");
    });
  });

  describe("Polymorphic", () => {
    it("renders as custom element", () => {
      render(<Avatar alt="Test" as="span" />);
      expect(screen.getByRole("img").tagName).toBe("SPAN");
    });

    it("maintains all classes with polymorphic rendering", () => {
      render(<Avatar alt="Test" as="span" preset={["primary"]} size="large" />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveClass("marduk-avatar");
      expect(avatar).toHaveClass("marduk-avatar--primary");
      expect(avatar).toHaveClass("marduk-avatar--size-large");
    });
  });

  describe("Edge Cases", () => {
    it("renders image when src provided", () => {
      render(<Avatar src="avatar.jpg" alt="John Doe" />);
      const image = document.querySelector(".marduk-avatar__image");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "avatar.jpg");
    });

    it("falls back to initials when no src", () => {
      render(<Avatar alt="John Doe" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("forwards props and className", () => {
      render(<Avatar alt="Test" data-testid="avatar" className="custom" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("custom");
    });

    it("combines all features together", () => {
      const { container } = render(
        <Avatar
          alt="John Doe"
          preset={["primary"]}
          size="large"
          shape="rounded"
          status="online"
          src="avatar.jpg"
        />,
      );
      const avatar = container.querySelector(".marduk-avatar");
      expect(avatar).toHaveClass("marduk-avatar--primary");
      expect(avatar).toHaveClass("marduk-avatar--size-large");
      expect(avatar).toHaveClass("marduk-avatar--shape-rounded");
      const status = document.querySelector(".marduk-avatar__status--online");
      expect(status).toBeInTheDocument();
    });
  });

  describe("Image Error Handling", () => {
    it("falls back to initials when image fails to load", () => {
      render(<Avatar src="invalid.jpg" alt="John Doe" />);
      const image = document.querySelector(".marduk-avatar__image") as HTMLImageElement;
      expect(image).toBeInTheDocument();

      fireEvent.error(image);

      expect(screen.getByText("JD")).toBeInTheDocument();
      expect(document.querySelector(".marduk-avatar--error")).toBeInTheDocument();
    });
  });

  describe("Fallback Chain", () => {
    it("uses image when src provided and loads", () => {
      render(<Avatar src="avatar.jpg" alt="Test" />);
      expect(document.querySelector(".marduk-avatar__image")).toBeInTheDocument();
    });

    it("uses custom initials over auto-generated", () => {
      render(<Avatar alt="John Doe" initials="AB" />);
      expect(screen.getByText("AB")).toBeInTheDocument();
      expect(screen.queryByText("JD")).not.toBeInTheDocument();
    });

    it("uses fallback icon when no image or initials", () => {
      const TestIcon = () => <span data-testid="icon">Icon</span>;
      render(<Avatar alt="" fallbackIcon={<TestIcon />} />);
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("shows default fallback when nothing provided", () => {
      render(<Avatar alt="" />);
      expect(document.querySelector(".marduk-avatar__fallback")).toBeInTheDocument();
    });
  });

  describe("Dark Mode Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    test.each([["primaryDark"], ["successDark"], ["dangerDark"]] as const)(
      "applies %s preset",
      (preset) => {
        render(<Avatar alt="Test" preset={[preset]} />);
        const avatar = screen.getByRole("img");
        expect(avatar).toHaveAttribute("data-preset", preset);
        expect(avatar).toHaveClass(`marduk-avatar--${preset}`);
      },
    );
  });

  describe("Accessibility", () => {
    it("applies img role with aria-label", () => {
      render(<Avatar alt="User avatar" />);
      const avatar = screen.getByRole("img", { name: "User avatar" });
      expect(avatar).toBeInTheDocument();
    });

    it("applies status aria-label", () => {
      render(<Avatar alt="Test" status="online" />);
      const status = document.querySelector('[aria-label="Status: online"]');
      expect(status).toBeInTheDocument();
    });
  });
});
