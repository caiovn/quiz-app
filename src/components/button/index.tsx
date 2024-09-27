import cn from "classnames";
import styles from "./button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary";
}

export default function Button({ children, variant, ...props }: Props) {
  return (
    <button
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
