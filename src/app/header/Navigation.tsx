import React from 'react';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from '@common/classnames';
import { Button } from '@theme';
import styles from './Navigation.module.css';

const Navigation: React.FC<{ className?: string }> = ({ className = '' }) => {
  const router = useRouter();
  const { formatMessage } = useIntl();

  return (
    <nav className={cn(className, styles.root)}>
      {/*['home', 'features', 'changelog'].map((item) => {
        const path = item === 'home' ? '/' : `/${item}/`;
        return (
          <Link
            key={item}
            href={path}
            className={cn(styles.element, {
              [styles.elementActive]: router.asPath === path,
            })}
          >
            {formatMessage({ id: `navigation.${item}` })}
          </Link>
        );
      })*/}
      <Button
        className={cn(styles.element)}
        href="https://update.git-installer.com/zip.php?release=latest"
        useAnchor
      >
        {formatMessage({ id: 'navigation.download' })}
      </Button>
    </nav>
  );
};

export default Navigation;
