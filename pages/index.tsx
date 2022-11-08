import React from 'react';
import { useIntl } from 'react-intl';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Intro from '@app/home/Intro';
import { Button } from '@theme';
import styles from './Home.module.css';
import layoutStyles from './Layout.module.css';

const githubApi =
  'https://api.github.com/repos/SayHelloGmbH/git-installer/releases';

export const getServerSideProps: GetServerSideProps<{
  data: { version: string; zip: string };
}> = async (context) => {
  const res = await fetch(githubApi);
  const data = await res.json();

  return {
    props: {
      data: {
        version: data[0].name,
        zip: data[0]['zipball_url'],
      },
    },
  };
};

const Home: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  const { formatMessage } = useIntl();
  return (
    <div className={layoutStyles.wrapper}>
      <Intro className={styles.intro} />
      <h1 className={styles.claim}>{formatMessage({ id: 'home.claim' })}</h1>
      <div className={styles.codeSection}>
        <Button useAnchor size="large" href={data.zip}>
          {formatMessage({ id: 'home.download' }, { version: data.version })}
        </Button>
        <Button
          useAnchor
          appearance="none"
          href="https://github.com/SayHelloGmbH/git-installer"
          size="large"
          target="_blank"
        >
          {formatMessage({ id: 'home.github' })}
        </Button>
      </div>
      <h2>{formatMessage({ id: 'home.features.title' })}</h2>
      <p>{formatMessage({ id: 'home.features.desc' })}</p>
    </div>
  );
};

export default Home;
