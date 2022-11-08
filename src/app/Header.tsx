import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from '@common/classnames';
import Navigation from '@app/header/Navigation';
import { PageBorderTop } from '@theme';
import styles from './Header.module.css';

const Header: React.FC<{ className?: string }> = ({ className = '' }) => {
  const router = useRouter();
  const isHome = router.asPath === '/';

  return (
    <header
      className={cn(className, styles.header, {
        [styles.headerBig]: isHome,
      })}
    >
      <div className={styles.headerInner}>
        <Link href="/" className={styles.title}>
          Git Installer
        </Link>
        <Navigation className={styles.navigation} />
      </div>
      <div className={styles.border}>
        <PageBorderTop className={styles.borderLine} />
        <PageBorderTop className={styles.borderLine} />
      </div>
    </header>
  );
};

export default Header;
