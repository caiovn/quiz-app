import styles from "./modal-template.module.css";
import { Button, Icon } from "@/components";
import { ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";

const createPortalStructure = (
  children: ReactNode,
  elm: Element | DocumentFragment
): ReactPortal => {
  return createPortal(
    <>
      <div className="overlay-background" />
      <div className="overlay-modal">{children}</div>
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
            <h1 className="heading-m-bold">{title}</h1>
            {subTitle && <p className="body-m-regular">{title}</p>}
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
