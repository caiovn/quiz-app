import FocusTrap from "focus-trap-react";
import styles from "./modal-template.module.css";
import { Button, Icon } from "@/components";
import React from "react";
import { ReactNode, ReactPortal, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

const createPortalStructure = (
  children: ReactNode,
  elm: Element | DocumentFragment
): ReactPortal => {
  return createPortal(
    <>
      <div className="overlay-background" />
      <FocusTrap>
        <div
          className="overlay-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog_label"
        >
          {children}
        </div>
      </FocusTrap>
    </>,
    elm
  );
};

export type ModalTemplateOnClose = "CONFIRM" | "DISMISS" | "CANCEL";

export default function ModalTemplate({
  title,
  subTitle,
  confirmButtonText,
  cancelButtonText,
  onClose,
}: {
  title: string;
  subTitle?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClose: (_: ModalTemplateOnClose) => void;
}) {
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose("DISMISS");
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const overlayElm = document.querySelector(".overlay");
  return (
    <>
      {overlayElm &&
        createPortalStructure(
          <div className={styles.modalWrapper}>
            <Button
              className={styles.closeButton}
              variant="tertiary"
              onClick={() => onClose("DISMISS")}
            >
              <Icon>close</Icon>
            </Button>
            <h1 className="heading-m-bold" id="">
              {title}
            </h1>
            {subTitle && <p className="body-m-regular">{subTitle}</p>}
            <div className={styles.buttons}>
              {cancelButtonText && (
                <Button variant="secondary" onClick={() => onClose("CANCEL")}>
                  {cancelButtonText}
                </Button>
              )}
              {confirmButtonText && (
                <Button variant="primary" onClick={() => onClose("CONFIRM")}>
                  {confirmButtonText}
                </Button>
              )}
            </div>
          </div>,
          overlayElm!
        )}
    </>
  );
}
