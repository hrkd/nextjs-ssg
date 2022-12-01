import React, { VFC, useEffect, useRef } from 'react';
import styles from 'styles/Modal.module.scss';
import cn from 'classnames';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export const Modal: VFC<{
  children: React.ReactNode;
  className?: string;
  onClose(e: React.MouseEvent<HTMLElement>): void;
  transition: string;
}> = ({ children, onClose, className, transition }) => {
  const modalInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (transition === 'exited') { 
      clearAllBodyScrollLocks();
      return
    } ;

    if (modalInnerRef.current) {
      disableBodyScroll(modalInnerRef.current, {
        reserveScrollBarGap: true,
      });
    }
  }, [modalInnerRef, transition]);

  const close = (e: React.MouseEvent<HTMLElement>) => {
    setTimeout(() => onClose(e), 300);
  };

  return (
    <section
      className={cn(styles.modal, styles[transition], className)}
      onClick={close}
    >
      <div
        className={cn(styles.inner)}
        ref={modalInnerRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button title="close" onClick={onClose}/> */}
        {children}
      </div>
    </section>
  );
};
