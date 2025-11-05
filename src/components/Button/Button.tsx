import {
  ElementType,
  ComponentPropsWithoutRef,
  ReactNode,
  useState,
} from "react";
import { ButtonVariant, ButtonAppearance, ComponentSize } from "../../types";
import "./Button.css";

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  as?: E;
  variant?: ButtonVariant;
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
  darkMode?: boolean;
};

export type ButtonProps<E extends ElementType = "button"> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps>;

export type { ButtonVariant, ButtonAppearance, ComponentSize };

const defaultElement = "button";

export const Button = <E extends ElementType = typeof defaultElement>({
  children,
  as,
  variant = "primary",
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
  darkMode = false,
  className,
  ...props
}: ButtonProps<E>) => {
  const Component = as || defaultElement;
  const [asyncLoading, setAsyncLoading] = useState(false);

  const isLoading = loading || asyncLoading;

  // TODO: potentially make onClick and onClickAsync props mutually exclusive,
  //       would be a breaking change, so probably keep as is. Sort of cool to
  //       have both anyways
  const handleClick = async (e: any) => {
    const clickProps = props as any;
    clickProps.onClick?.(e);

    if (onClickAsync) {
      setAsyncLoading(true);
      try {
        await onClickAsync();
      } catch (error) {
        console.error(
          "Error when calling button's onClickAsync method:",
          error
        );
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
    darkMode ? "marduk-button--dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const buttonSpecificProps =
    Component === "button"
      ? {
          type: (props as any).type || "button",
          disabled: disabled || isLoading,
        }
      : {};

  // We are removing onClick because if we have a onClickAsync prop,
  // we handle the click differently
  const { onClick: propsOnClick, ...restProps } = props as any;

  const componentProps = {
    className: classNames,
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
      {isLoading && (
        <span className="marduk-button-spinner" aria-hidden="true" />
      )}
      <span
        className={
          isLoading && !loadingText ? "marduk-button-content--loading" : ""
        }
      >
        {leftIcon && (
          <span className="marduk-button-icon-left">{leftIcon}</span>
        )}
        <span className={iconOnly ? "marduk-button-text--icon-only" : ""}>
          {isLoading && loadingText ? loadingText : children}
        </span>
        {rightIcon && (
          <span className="marduk-button-icon-right">{rightIcon}</span>
        )}
      </span>
    </Component>
  );
};
