import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styles from "./input.module.css";
import cn from "classnames";

type InputProps = {
  label: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> & {
    ["data-testid"]?: string;
  };
  register?: UseFormRegisterReturn;
  error?: FieldError;
};

export default function Input({
  label,
  inputProps,
  register,
  error,
}: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="name" className="body-s-regular">
        {label}
      </label>
      <input
        type="text"
        autoComplete="off"
        {...inputProps}
        {...register}
        className={cn(inputProps?.className, error ? styles.inputOnError : "")}
      />
      <p
        className={cn("caption-l-regular", styles.error)}
        data-testid={`${inputProps?.["data-testid"]}-error-msg`}
      >
        {error && error.message}
      </p>
    </div>
  );
}
