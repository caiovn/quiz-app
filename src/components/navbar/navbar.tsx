/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import styles from "./navbar.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/providers/theme.provider";
import { Icon, Button } from "@/components";

type NavBarItem = {
  label: string;
  route: string;
  icon?: string;
};

export default function Navbar() {
  const { setTheme, theme } = useContext(ThemeContext);
  const items: NavBarItem[] = [
    {
      label: "Home",
      route: "/",
      icon: "home",
    },
    {
      label: "quizzes",
      route: "/quiz",
      icon: "bolt",
    },
  ];

  const toggleTheme = () => {
    console.log("aquiii", theme);
    setTheme();
  };
  return (
    <nav className={styles.nav}>
      <div>
        {items.map((i, index) => (
          <Link className={styles.link} href={i.route} key={index}>
            <span>
              {i.icon && <Icon color="inverse">{i.icon}</Icon>}
              {i.label}
            </span>
          </Link>
        ))}
        <Button onClick={toggleTheme} variant="tertiary">
          <Icon color="inverse">contrast</Icon>
        </Button>
      </div>
    </nav>
  );
}
