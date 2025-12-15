import { CSSProperties, useState, ImgHTMLAttributes } from "react";
import { ImageObjectFit, ImageAspectRatio } from "./Image.types";
import { getPreset, ImagePresets, ImagePresetConfig } from "./presets";
import "./Image.css";

type ImageOwnProps = {
  src: string;
  alt: string;
  preset?: (keyof ImagePresets | string)[];
  lazy?: boolean;
  placeholder?: string;
  objectFit?: ImageObjectFit;
  aspectRatio?: ImageAspectRatio;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
};

export type ImageProps = ImageOwnProps &
  Omit<ImgHTMLAttributes<HTMLImageElement>, keyof ImageOwnProps | "src" | "alt">;

export type { ImageObjectFit, ImageAspectRatio };

export const Image = ({
  src,
  alt,
  preset = [],
  lazy = true,
  placeholder,
  objectFit,
  aspectRatio,
  width,
  height,
  className,
  style,
  onError,
  ...props
}: ImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let mergedConfig: ImagePresetConfig = {};

  if (preset && preset.length > 0) {
    for (const presetName of preset) {
      const config = getPreset(presetName);
      if (config) {
        mergedConfig = {
          ...mergedConfig,
          ...config,
          style: {
            ...(mergedConfig.style || {}),
            ...(config.style || {}),
          },
        };
      }
    }
  }

  const resolvedObjectFit = objectFit ?? mergedConfig.objectFit ?? "cover";
  const resolvedAspectRatio = aspectRatio ?? mergedConfig.aspectRatio ?? "auto";
  const resolvedLazy = lazy ?? mergedConfig.lazy ?? true;
  const resolvedPlaceholder = placeholder ?? mergedConfig.placeholder;
  const resolvedWidth = width ?? mergedConfig.width;
  const resolvedHeight = height ?? mergedConfig.height;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(true);
    setIsLoading(false);
    onError?.(e);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const classNames = [
    "marduk-image",
    `marduk-image--fit-${resolvedObjectFit}`,
    resolvedAspectRatio !== "auto" &&
      `marduk-image--aspect-${resolvedAspectRatio.replace(":", "-")}`,
    isLoading && "marduk-image--loading",
    imageError && "marduk-image--error",
    ...(preset.length > 0 ? preset.map((p) => `marduk-image--${p}`) : []),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const presetStyle = mergedConfig.style || {};
  const combinedStyle = {
    ...presetStyle,
    ...style,
    ...(resolvedWidth && { width: resolvedWidth }),
    ...(resolvedHeight && { height: resolvedHeight }),
  } as CSSProperties;

  const dataAttributes = {
    "data-fit": resolvedObjectFit,
    "data-aspect-ratio": resolvedAspectRatio,
    ...(preset.length > 0 && { "data-preset": preset.join(",") }),
  };

  if (imageError && resolvedPlaceholder) {
    return (
      <img
        src={resolvedPlaceholder}
        alt={alt}
        className={classNames}
        style={combinedStyle}
        {...dataAttributes}
        {...props}
      />
    );
  }

  if (imageError) {
    return (
      <div
        className={`${classNames} marduk-image--fallback`}
        style={combinedStyle}
        {...dataAttributes}
        role="img"
        aria-label={alt}
      >
        <span className="marduk-image__error-text">Image failed to load</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && resolvedPlaceholder && (
        <img
          src={resolvedPlaceholder}
          alt=""
          className="marduk-image__placeholder"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={resolvedLazy ? "lazy" : "eager"}
        className={classNames}
        style={combinedStyle}
        onError={handleError}
        onLoad={handleLoad}
        {...dataAttributes}
        {...props}
      />
    </>
  );
};
