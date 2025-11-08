import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe("Rendering", () => {
    it("renders children", () => {
      render(
        <Tooltip content="Tooltip text">
          <button>Hover me</button>
        </Tooltip>,
      );

      expect(screen.getByText("Hover me")).toBeInTheDocument();
    });

    it("does not show tooltip by default", () => {
      render(
        <Tooltip content="Tooltip text">
          <button>Hover me</button>
        </Tooltip>,
      );

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  describe("Show/Hide on Hover", () => {
    it("shows tooltip on mouse enter after delay", async () => {
      render(
        <Tooltip content="Tooltip text" delay={200}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(200);
      });

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument();
        expect(screen.getByText("Tooltip text")).toBeInTheDocument();
      });
    });

    it("hides tooltip on mouse leave", async () => {
      render(
        <Tooltip content="Tooltip text" delay={0}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      act(() => {
        jest.advanceTimersByTime(0);
      });

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument();
      });

      fireEvent.mouseLeave(trigger);

      await waitFor(() => {
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
      });
    });

    it("cancels showing if mouse leaves before delay", async () => {
      render(
        <Tooltip content="Tooltip text" delay={500}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      act(() => {
        jest.advanceTimersByTime(200);
      });

      fireEvent.mouseLeave(trigger);

      act(() => {
        jest.advanceTimersByTime(500);
      });

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  describe("Show/Hide on Focus", () => {
    it("shows tooltip on focus after delay", async () => {
      render(
        <Tooltip content="Tooltip text" delay={200}>
          <button>Focus me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Focus me");
      fireEvent.focus(trigger);

      act(() => {
        jest.advanceTimersByTime(200);
      });

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument();
      });
    });

    it("hides tooltip on blur", async () => {
      render(
        <Tooltip content="Tooltip text" delay={0}>
          <button>Focus me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Focus me");
      fireEvent.focus(trigger);

      act(() => {
        jest.advanceTimersByTime(0);
      });

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument();
      });

      fireEvent.blur(trigger);

      await waitFor(() => {
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
      });
    });
  });

  describe("Positions", () => {
    it("applies top position by default", async () => {
      render(
        <Tooltip content="Tooltip text" delay={0}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      act(() => {
        jest.advanceTimersByTime(0);
      });

      await waitFor(() => {
        const tooltip = screen.getByRole("tooltip");
        expect(tooltip.className).toContain("top");
      });
    });

    it("applies custom position", async () => {
      const positions = ["bottom", "left", "right"] as const;

      for (const position of positions) {
        const { unmount } = render(
          <Tooltip content="Tooltip text" position={position} delay={0}>
            <button>Hover me</button>
          </Tooltip>,
        );

        const trigger = screen.getByText("Hover me");
        fireEvent.mouseEnter(trigger);

        act(() => {
          jest.advanceTimersByTime(0);
        });

        await waitFor(() => {
          const tooltip = screen.getByRole("tooltip");
          expect(tooltip.className).toContain(position);
        });

        unmount();
      }
    });
  });

  describe("Delay", () => {
    it("uses default delay of 200ms", async () => {
      render(
        <Tooltip content="Tooltip text">
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      act(() => {
        jest.advanceTimersByTime(199);
      });
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(1);
      });

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument();
      });
    });

    it("uses custom delay", async () => {
      render(
        <Tooltip content="Tooltip text" delay={500}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      act(() => {
        jest.advanceTimersByTime(499);
      });
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(1);
      });

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument();
      });
    });

    it("shows immediately with zero delay", async () => {
      render(
        <Tooltip content="Tooltip text" delay={0}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      act(() => {
        jest.advanceTimersByTime(0);
      });

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument();
      });
    });
  });

  describe("Content", () => {
    it("renders string content", async () => {
      render(
        <Tooltip content="Simple text" delay={0}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      act(() => {
        jest.advanceTimersByTime(0);
      });

      await waitFor(() => {
        expect(screen.getByText("Simple text")).toBeInTheDocument();
      });
    });

    it("renders ReactNode content", async () => {
      render(
        <Tooltip content={<strong>Bold text</strong>} delay={0}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      act(() => {
        jest.advanceTimersByTime(0);
      });

      await waitFor(() => {
        const boldText = screen.getByText("Bold text");
        expect(boldText.tagName).toBe("STRONG");
      });
    });
  });

  describe("Accessibility", () => {
    it("has tooltip role", async () => {
      render(
        <Tooltip content="Tooltip text" delay={0}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      act(() => {
        jest.advanceTimersByTime(0);
      });

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument();
      });
    });
  });
});
