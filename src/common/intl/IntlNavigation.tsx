import React from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import cn from '@common/classnames';
import styles from './IntlNavigation.module.css';
import { locales } from './intlContext';

const IntlNavigation: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { formatMessage, locale: activeLocale } = useIntl();
  const router = useRouter();

  return (
    <nav className={cn(className, styles.root)}>
      {Object.keys(locales).map((locale) => (
        <button
          key={locale}
          className={cn(styles.button, {
            [styles.buttonActive]: activeLocale === locale,
          })}
          onClick={() => router.push(router.asPath, router.asPath, { locale })}
        >
          {formatMessage({ id: `locale.${locale}` })}
        </button>
      ))}
    </nav>
  );
};

export default IntlNavigation;
