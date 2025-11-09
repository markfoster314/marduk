import { ElementType, ComponentPropsWithoutRef, ReactNode, useState } from "react";
import { ButtonAppearance } from "./Button.types";
import { ComponentSize } from "@/types/components";
import { getPreset, ButtonPresets, ButtonPresetConfig } from "./presets";
import "./Button.css";

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  as?: E;
  preset?: (keyof ButtonPresets | string)[];
  appearance?: ButtonAppearance;
  size?: ComponentSize;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: ReactNode;
  onClickAsync?: () => Promise<void>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconOnly?: boolean;
  fullWidth?: boolean;
};

export type ButtonProps<E extends ElementType = "button"> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps>;

export type { ButtonAppearance, ComponentSize };

const defaultElement = "button";

export const Button = <E extends ElementType = typeof defaultElement>({
  children,
  as,
  preset,
  appearance = "filled",
  size = "medium",
  disabled = false,
  loading = false,
  loadingText,
  onClickAsync,
  leftIcon,
  rightIcon,
  iconOnly = false,
  fullWidth = false,
  className,
  ...props
}: ButtonProps<E>) => {
  const Component = as || defaultElement;
  const [asyncLoading, setAsyncLoading] = useState(false);

  const isLoading = loading || asyncLoading;

  let mergedPresetConfig: ButtonPresetConfig = {};

  if (preset && preset.length > 0) {
    for (const presetName of preset) {
      const config = getPreset(presetName);
      if (config) {
        mergedPresetConfig = {
          ...mergedPresetConfig,
          ...config,
        };
      }
    }
  }

  const getVariantFromPreset = (): string => {
    if (!preset || preset.length === 0) return "primary";
    const lastPreset = preset[preset.length - 1];
    if (lastPreset.endsWith("Dark")) {
      return lastPreset.replace("Dark", "");
    }
    return lastPreset;
  };

  const isDark = preset && preset.length > 0 && preset.some((p) => p.endsWith("Dark"));
  const variant = getVariantFromPreset();

  // Thought: potentially make onClick and onClickAsync props mutually exclusive,
  //       would be a breaking change, so probably keep as is. Sort of cool to
  //       have both anyways
  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    const clickProps = props as ComponentPropsWithoutRef<E>;
    clickProps.onClick?.(e);

    if (onClickAsync) {
      setAsyncLoading(true);
      try {
        await onClickAsync();
      } catch (error) {
        console.error("Error when calling button's onClickAsync method:", error);
      } finally {
        setAsyncLoading(false);
      }
    }
  };

  const classNames = [
    "marduk-button",
    `marduk-button--${variant}`,
    `marduk-button--appearance-${appearance}`,
    `marduk-button--${size}`,
    disabled ? "marduk-button--disabled" : "",
    isLoading ? "marduk-button--loading" : "",
    iconOnly ? "marduk-button--icon-only" : "",
    fullWidth ? "marduk-button--full-width" : "",
    isDark ? "marduk-button--dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const buttonSpecificProps =
    Component === "button"
      ? {
          type: (props as ComponentPropsWithoutRef<"button">).type || "button",
          disabled: disabled || isLoading,
        }
      : {};

  // We are removing onClick because if we have a onClickAsync prop,
  // we handle the click differently
  const { onClick: propsOnClick, ...restProps } = props as ComponentPropsWithoutRef<E>;

  const componentProps = {
    className: classNames,
    ...(preset && preset.length > 0 && { "data-preset": preset.join(",") }),
    "data-variant": variant,
    "data-appearance": appearance,
    "data-size": size,
    ...(isLoading && { "data-loading": true }),
    ...(disabled && { "data-disabled": true }),
    ...(iconOnly && { "data-icon-only": true }),
    ...(fullWidth && { "data-full-width": true }),
    ...buttonSpecificProps,
    ...(isLoading && { "aria-busy": true }),
    ...(disabled && { "aria-disabled": true }),
    onClick: onClickAsync ? handleClick : propsOnClick,
    ...restProps,
  };

  return (
    <Component {...componentProps}>
      {isLoading && <span className="marduk-button-spinner" aria-hidden="true" />}
      <span
        className={[
          "marduk-button-content",
          isLoading && !loadingText && "marduk-button-content--loading",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {leftIcon && <span className="marduk-button-icon-left">{leftIcon}</span>}
        <span className={iconOnly ? "marduk-button-text--icon-only" : "marduk-button-text"}>
          {isLoading && loadingText ? loadingText : children}
        </span>
        {rightIcon && <span className="marduk-button-icon-right">{rightIcon}</span>}
      </span>
    </Component>
  );
};
