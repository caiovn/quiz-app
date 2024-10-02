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
  const { setTheme } = useContext(ThemeContext);
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

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navContent}>
        <div className={styles.navList}>
          {items.map((i, index) => (
            <Link className={styles.link} href={i.route} key={index}>
              {i.icon && <Icon color="inverse">{i.icon}</Icon>}
              <span className="">{i.label}</span>
            </Link>
          ))}
        </div>
        <Button onClick={setTheme} variant="tertiary">
          <Icon color="inverse">contrast</Icon>
        </Button>
      </div>
    </nav>
  );
}
