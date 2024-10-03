import cn from "classnames";
import styles from "./button.module.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "small" | "medium" | "large";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size?: ButtonSize;
}

export default function Button({
  children,
  variant,
  size = "medium",
  ...props
}: Props) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        styles.button,
        styles[`button-${variant}`],
        styles[`button-${size}`],
        props.className
      )}
    >
      {children}
    </button>
  );
}
