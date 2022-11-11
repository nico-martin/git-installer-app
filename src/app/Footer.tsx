import React from 'react';
import { useIntl } from 'react-intl';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import cn from '@common/classnames';
import { PageBorderBottom } from '@theme';
import styles from './Footer.module.css';

const githubApi =
  'https://api.github.com/repos/SayHelloGmbH/git-installer/releases';

export const getServerSideProps: GetServerSideProps<{
  version: string;
}> = async (context) => {
  const res = await fetch(githubApi);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      version: data[0]['tag_name'],
    },
  };
};

const Footer: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  const { formatMessage } = useIntl();
  return (
    <div className={cn(className, styles.footer)}>
      <footer className={styles.footerInner}>
        <div className={styles.claim}>
          <p>{formatMessage({ id: 'footer.claim1' })}</p>
          <p>{formatMessage({ id: 'footer.claim2' })}</p>
        </div>
        <div className={styles.credits}>
          <p>{formatMessage({ id: 'footer.credits' })}:</p>
          <div className={styles.address}>
            <p>
              <b>Say Hello GmbH</b>
              <br />
              Thunstrasse 4
              <br />
              3700 Spiez
              <br />
              Switzerland
            </p>
            <p>
              <a href="https://sayhello.ch" target="_blank" rel="noreferrer">
                https://sayhello.ch
              </a>
            </p>
            <p>
              <a href="mailto:hello@sayhello.ch">hello@sayhello.ch</a>
            </p>
          </div>
        </div>
        <p className={styles.legal}>
          <b>{formatMessage({ id: 'footer.legal.title' })}</b>:{' '}
          {formatMessage({ id: 'footer.legal' })}
        </p>
      </footer>
      <div className={styles.border}>
        <PageBorderBottom className={styles.borderLine} />
        <PageBorderBottom className={styles.borderLine} />
      </div>
    </div>
  );
};

export default Footer;
