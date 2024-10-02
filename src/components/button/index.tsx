import cn from "classnames";
import styles from "./button.module.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

export default function Button({ children, variant, ...props }: Props) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        styles.button,
        styles[`button-${variant}`],
        props.className
      )}
    >
      {children}
    </button>
  );
}
