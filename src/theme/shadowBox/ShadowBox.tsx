import React from 'react';
import cn from '@common/classnames';
import { CloseButton } from '../index';
import styles from './ShadowBox.module.css';

export interface ShadowBoxPropsI {
  title?: string;
  children?: JSX.Element | JSX.Element[] | string;
  close: Function;
  size?: 'large' | 'small' | 'medium';
  className?: string;
  preventClose?: boolean;
}

const ShadowBox: React.FC<ShadowBoxPropsI> = ({
  title,
  children,
  close,
  size = 'large',
  className = '',
  preventClose,
}) => {
  const [show, setShow] = React.useState<boolean>(false);
  const [shadow, setShadow] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.setTimeout(() => setShow(true), 10);
    return () => {
      setShow(false);
    };
  }, []);

  const onClose = () => {
    if (preventClose) {
      return;
    }
    setShow(false);
    window.setTimeout(() => {
      close();
    }, 200);
  };

  return (
    <div
      className={cn(className, styles.root, {
        [styles.isSmall]: size === 'small',
        [styles.isMedium]: size === 'medium',
      })}
      data-visible={show}
    >
      <div className={styles.shadow} onClick={onClose} />
      <article className={styles.box}>
        <header
          className={cn(styles.header, {
            [styles.headerShadow]: shadow,
          })}
        >
          <h2 className={styles.title}>{title}</h2>
          {!preventClose && (
            <CloseButton className={styles.close} onClick={onClose} />
          )}
        </header>
        <div className={styles.content}>{children}</div>
      </article>
    </div>
  );
};

export default ShadowBox;
