import "./styles/variables.css";
import "./components/Box/augmentation";
import "./components/Text/augmentation";

// Shared types - used across multiple components
export type {
  ComponentSize,
  Alignment,
  FontWeight,
  LetterSpacing,
  UnderlineStyle,
  LineHeight,
} from "./types/components";

export type { BaseIconProps } from "./types/icons";

export { Box } from "./components/Box/Box";
export type { BoxProps } from "./components/Box/Box";
export {
  defineBoxPresets,
  getAllPresets,
  resetCustomPresets,
} from "./components/Box/presets";
export type { BoxPresetConfig, BoxPresets } from "./components/Box/presets";
export type {
  SpacingSize,
  DisplayType,
  FlexDirection,
  FlexJustify,
  FlexAlign,
  FlexWrap,
  BorderRadius,
} from "./components/Box/Box.types";

export { Button } from "./components/Button/Button";
export type { ButtonProps } from "./components/Button/Button";
export type {
  ButtonVariant,
  ButtonAppearance,
} from "./components/Button/Button.types";

export { Text } from "./components/Text/Text";
export type { TextProps } from "./components/Text/Text";
export {
  defineTextPresets,
  getAllPresets as getAllTextPresets,
  resetCustomPresets as resetTextCustomPresets,
} from "./components/Text/presets";
export type { TextPresetConfig, TextPresets } from "./components/Text/presets";

export { Title } from "./components/Title/Title";
export type { TitleProps } from "./components/Title/Title";
export type { TitleVariant, TitleSize } from "./components/Title/Title.types";

export { Svg } from "./components/Svg/Svg";
export type { SvgProps } from "./components/Svg/Svg";
export type {
  RotationAngle,
  FlipDirection,
  SpinSpeed,
  SvgAnimation,
} from "./components/Svg/Svg.types";

export { Alert } from "./components/Alert/Alert";
export type { AlertProps } from "./components/Alert/Alert";
export type {
  AlertVariant,
  AlertAnimation,
} from "./components/Alert/Alert.types";

export { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
export type { LoadingScreenProps } from "./components/LoadingScreen/LoadingScreen";
export type { LoadingScreenAnimation } from "./components/LoadingScreen/LoadingScreen.types";

export { TextInput } from "./components/TextInput/TextInput";
export type { TextInputProps } from "./components/TextInput/TextInput";

export { Breadcrumb } from "./components/Breadcrumb/Breadcrumb";
export type {
  BreadcrumbProps,
  BreadcrumbItem,
} from "./components/Breadcrumb/Breadcrumb";

export { Checkbox } from "./components/Checkbox/Checkbox";
export type { CheckboxProps } from "./components/Checkbox/Checkbox";

export { Dropdown } from "./components/Dropdown/Dropdown";
export type {
  DropdownProps,
  DropdownOption,
} from "./components/Dropdown/Dropdown";

export { Toggle } from "./components/Toggle/Toggle";
export type { ToggleProps } from "./components/Toggle/Toggle";

export { RadioButtons } from "./components/RadioButtons/RadioButtons";
export type {
  RadioButtonsProps,
  RadioOption,
} from "./components/RadioButtons/RadioButtons";

export { Toast } from "./components/Toast/Toast";
export type { ToastProps } from "./components/Toast/Toast";

export { ProgressBar } from "./components/ProgressBar/ProgressBar";
export type { ProgressBarProps } from "./components/ProgressBar/ProgressBar";

export { Pagination } from "./components/Pagination/Pagination";
export type { PaginationProps } from "./components/Pagination/Pagination";

export { Tooltip } from "./components/Tooltip/Tooltip";
export type { TooltipProps } from "./components/Tooltip/Tooltip";

export { Modal } from "./components/Modal/Modal";
export type { ModalProps } from "./components/Modal/Modal";

export * from "./icons";
