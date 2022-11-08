import React from 'react';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import English from './locales/en.json';

export const locales = {
  en: English,
};

export const IntlContextProvider = ({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) => {
  const { locale = Object.keys(locales)[0] } = useRouter();

  const messages: Record<string, string> = React.useMemo(
    // @ts-ignore
    () => (locale in locales ? locales[locale] : English),
    [locale]
  );

  return (
    <IntlProvider locale={locale} messages={messages} onError={() => {}}>
      {children}
    </IntlProvider>
  );
};
