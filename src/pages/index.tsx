/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Button } from "@/components";
import Image from "next/image";
import React, { useEffect } from "react";
import onboarding from "../public/onboarding.svg";
import styles from "./home.module.css";
import { createPortal } from "react-dom";

export default function Home() {
  return (
    <>
      <div className={styles.onboarding}>
        <div className={styles.onboardingText}>
          <h1 className="heading-m-bold">
            Desafie seu conhecimento com nossos quizzes interativos!
          </h1>
          <Button variant="primary">Comece Agora</Button>
        </div>
        <figure>
          <Image
            className={styles.onboardingImage}
            src={onboarding}
            width={560}
            alt={""}
          ></Image>
          <figcaption className="caption-m-regular">
            Designer by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"http://www.freepik.com/"}
            >
              Freepik
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
