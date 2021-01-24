import React, { FunctionComponent } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";

// type Variants = "outline" | "text";
type Sizes = "sm" | "md" | "lg";
// type Colors = "default" | "primary" | "secondary" | "danger";

const Input: FunctionComponent<
  {
    error?: boolean;
    disabled?: boolean;
    helperText?: String;
    startIcon?: String;
    endIcon?: String;
    value?: string;
    size?: Sizes;
    fullWidth?: boolean;
    multiLine?: boolean;
    rows?: Number;
  } & React.HTMLAttributes<HTMLInputElement>
> = ({
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  size,
  fullWidth,
  multiLine,
  rows,
  ...props
}) => {
  const classNames = cn({
    [styles.Input]: Input,
    // [styles[`Button_variant_${variant}`]]: variant,
    // [styles.Button_disableShadow]: disableShadow,
    // [styles.Button_disabled]: disabled,
    // [styles[`Button_size_${size}`]]: size,
    // [styles[`Button_color_${color}`]]: color,
  });

  return <input className={classNames} {...props} />;
};

export default Input;
