import cn from "classnames";
import styles from "./icon.module.css";
export default function Icon({
  children,
  color,
  size = "small",
}: {
  children: string;
  color?: "inverse";
  size?: "small" | "medium" | "large";
}) {
  return (
    <div
      className={cn(
        "material-symbols-outlined",
        styles.icon,
        color && styles[`icon-${color}`],
        styles[`icon-size-${size}`]
      )}
      aria-hidden="false"
    >
      {children}
    </div>
  );
}
