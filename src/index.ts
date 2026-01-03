import "./styles/variables.css";

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
export { defineBoxPresets, getAllPresets, resetCustomPresets } from "./components/Box/presets";
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
export {
  defineButtonPresets,
  getAllPresets as getAllButtonPresets,
  resetCustomPresets as resetButtonCustomPresets,
} from "./components/Button/presets";
export type { ButtonPresetConfig, ButtonPresets } from "./components/Button/presets";
export type { ButtonAppearance } from "./components/Button/Button.types";

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
export {
  defineTitlePresets,
  getAllPresets as getAllTitlePresets,
  resetCustomPresets as resetTitleCustomPresets,
} from "./components/Title/presets";
export type { TitlePresetConfig, TitlePresets } from "./components/Title/presets";
export type { TitleSize } from "./components/Title/Title.types";

export { Svg } from "./components/Svg/Svg";
export type { SvgProps } from "./components/Svg/Svg.types";
export type {
  RotationAngle,
  FlipDirection,
  SpinSpeed,
  SvgAnimation,
} from "./components/Svg/Svg.types";
export {
  defineSvgPresets,
  getPreset as getSvgPreset,
  getAllPresets as getAllSvgPresets,
  resetCustomPresets as resetSvgCustomPresets,
} from "./components/Svg/presets";
export type { SvgPresetConfig, SvgPresets } from "./components/Svg/presets";

export { Link } from "./components/Link/Link";
export type { LinkProps } from "./components/Link/Link";
export type { LinkUnderline, LinkTarget } from "./components/Link/Link.types";
export {
  defineLinkPresets,
  getPreset as getLinkPreset,
  getAllPresets as getAllLinkPresets,
  resetCustomPresets as resetLinkCustomPresets,
} from "./components/Link/presets";
export type { LinkPresetConfig, LinkPresets } from "./components/Link/presets";

export { Badge } from "./components/Badge/Badge";
export type { BadgeProps } from "./components/Badge/Badge";
export type { BadgeSize, BadgePosition } from "./components/Badge/Badge.types";
export {
  defineBadgePresets,
  getPreset as getBadgePreset,
  getAllPresets as getAllBadgePresets,
  resetCustomPresets as resetBadgeCustomPresets,
} from "./components/Badge/presets";
export type { BadgePresetConfig, BadgePresets } from "./components/Badge/presets";

export { Alert } from "./compositions/Alert/Alert";
export type { AlertProps } from "./compositions/Alert/Alert";
export type { AlertVariant, AlertAnimation } from "./compositions/Alert/Alert.types";

export { LoadingIndicator } from "./compositions/LoadingIndicator/LoadingIndicator";
export type { LoadingIndicatorProps } from "./compositions/LoadingIndicator/LoadingIndicator";
export type {
  LoadingIndicatorAnimation,
  LoadingIndicatorPosition,
} from "./compositions/LoadingIndicator/LoadingIndicator.types";

export { Breadcrumb } from "./compositions/Breadcrumb/Breadcrumb";
export type { BreadcrumbProps, BreadcrumbItem } from "./compositions/Breadcrumb/Breadcrumb";

export { Toast } from "./compositions/Toast/Toast";
export type { ToastProps } from "./compositions/Toast/Toast";

export { Pagination } from "./compositions/Pagination/Pagination";
export type { PaginationProps } from "./compositions/Pagination/Pagination";

export { TextInput } from "./components/TextInput/TextInput";
export type { TextInputProps } from "./components/TextInput/TextInput";

export { Checkbox } from "./components/Checkbox/Checkbox";
export type { CheckboxProps } from "./components/Checkbox/Checkbox";

export { Dropdown } from "./components/Dropdown/Dropdown";
export type { DropdownProps, DropdownOption } from "./components/Dropdown/Dropdown";

export { Toggle } from "./components/Toggle/Toggle";
export type { ToggleProps } from "./components/Toggle/Toggle";

export { RadioButtons } from "./components/RadioButtons/RadioButtons";
export type { RadioButtonsProps, RadioOption } from "./components/RadioButtons/RadioButtons";

export { ProgressBar } from "./components/ProgressBar/ProgressBar";
export type { ProgressBarProps } from "./components/ProgressBar/ProgressBar";

export { Tooltip } from "./components/Tooltip/Tooltip";
export type { TooltipProps } from "./components/Tooltip/Tooltip";

export { Modal } from "./compositions/Modal/Modal";
export type { ModalProps } from "./compositions/Modal/Modal";

export * from "./icons";
