import styles from "./select.module.css";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type SelectProps = {
  label: string;
  inputProps?: React.SelectHTMLAttributes<HTMLSelectElement> & {
    ["data-testid"]: string;
  };
  register?: UseFormRegisterReturn;
  error?: FieldError;
  options: OptionProps[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OptionProps = { label: string; value: any };

export default function Select({
  label,
  inputProps,
  register,
  error,
  options,
}: SelectProps) {
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor="quiz-select">{label}</label>
      <select {...inputProps} {...register}>
        <option disabled>Selecione</option>
        {options.map((o, index) => (
          <option key={index} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p
          className={styles.error}
          data-testid={`${inputProps?.["data-testid"]}-error-message`}
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
