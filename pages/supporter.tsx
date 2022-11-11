import React from 'react';
import { useIntl } from 'react-intl';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { PluginInfos, getPluginInfos } from '@common/plugin';
import layoutStyles from './Layout.module.css';
import styles from './_app.module.css';
import Home from './index';

export const getServerSideProps: GetServerSideProps<{
  plugin: PluginInfos;
}> = async (context) => ({
  props: {
    plugin: await getPluginInfos(),
  },
});

const Supporter: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ plugin }) => {
  const { formatMessage } = useIntl();
  return (
    <div className={layoutStyles.wrapper}>
      <h1 className={styles.title}>
        {formatMessage({ id: 'supporter.title' })}
      </h1>
      <p>{formatMessage({ id: 'supporter.desc' })}</p>
    </div>
  );
};

export default Supporter;
