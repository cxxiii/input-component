import React, { FunctionComponent } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";

// type Variants = "outline" | "text";
type Sizes = "sm" | "md" | "lg";
// type Colors = "default" | "primary" | "secondary" | "danger";

const Input: FunctionComponent<
  {
    label: String;
    error?: boolean;
    disabled?: boolean;
    helperText?: String;
    startIcon?: String;
    endIcon?: String;
    value?: string;
    size?: Sizes;
    fullWidth?: boolean;
    multiLine?: boolean;
  } & React.HTMLAttributes<HTMLInputElement>
> = ({
  label,
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  size,
  fullWidth,
  multiLine,
  ...props
}) => {
  const classNames = cn({
    [styles.Input]: Input,
    [styles.Input_error]: error,
    [styles.Input_disabled]: disabled,
    [styles.Input_startIcon_offset]: startIcon,
    [styles.Input_endIcon_offset]: endIcon,
    [styles[`Input_size_${size}`]]: size,
    [styles.Input_fullWidth]: fullWidth,
    [styles.Input_textarea]: multiLine,
  });

  return (
    <div className={styles.Input_container}>
      <label className={styles.Input_label} htmlFor="Input">
        {label}
      </label>
      {!multiLine ? (
        <input className={classNames} name="Input" {...props} />
      ) : (
        <textarea className={classNames} name="Input" />
      )}
      {startIcon && !size && !fullWidth && (
        <i className="material-icons start-icon">{startIcon}</i>
      )}
      {endIcon && !size && !fullWidth && (
        <i className="material-icons end-icon">{endIcon}</i>
      )}
      <div className={styles.Input_helperText}>{helperText}</div>
    </div>
  );
};

export default Input;
