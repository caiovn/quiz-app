import styles from "./select.module.css";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type SelectProps = {
  label: string;
  inputProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  options: OptionProps[];
};

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
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}
