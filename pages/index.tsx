import React from 'react';
import { useIntl } from 'react-intl';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { PluginInfos, getPluginInfos } from '@common/plugin';
import PricingSupport from '@app/PricingSupport';
import Intro from '@app/home/Intro';
import {
  Button,
  CellBody,
  CellHeading,
  Row,
  TBody,
  THead,
  Table,
} from '@theme';
import styles from './Home.module.css';
import layoutStyles from './Layout.module.css';

export const getStaticProps: GetStaticProps<{
  plugin: PluginInfos;
}> = async (context) => ({
  props: {
    plugin: await getPluginInfos(),
  },
});

const Home: React.FC<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  plugin,
}) => {
  const { formatMessage } = useIntl();
  return (
    <div className={layoutStyles.wrapper}>
      <Intro className={styles.intro} />
      <h1 className={styles.claim}>{formatMessage({ id: 'home.claim' })}</h1>
      <div className={styles.codeSection}>
        <Button useAnchor size="large" href={plugin.download_url}>
          {formatMessage({ id: 'home.download' }, { version: plugin.version })}
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
      <Table className={styles.featuresTable}>
        <TBody>
          {[
            {
              feature:
                '<b>Install and update Plugins from Git repositories</b>',
              value: '✅',
            },
            {
              feature: '<b>Provider</b>',
              value: '',
            },
            {
              feature: '- GitHub',
              value: '✅',
            },
            {
              feature: '- Gitlab',
              value: '✅',
            },
            {
              feature: '- Bitbucket',
              value: '✅',
            },
            {
              feature: '<b>Webhook updates</b>',
              value: '✅',
            },
            {
              feature:
                '<b>Integrated WordPress update process</b><br />View pending updates directly in the WordPress overview and update them individually or as a bulk update.',
              value: '✅',
            },
            {
              feature: '<b>Private Repositories</b>',
              value: '✅',
            },
            {
              feature:
                '<b>Must Use Plugin support</b><br /><a href="https://wordpress.org/support/article/must-use-plugins/" target="_blank">https://wordpress.org/support/article/must-use-plugins/</a>',
              value: '✅',
            },
            {
              feature: '<b>Branches</b>',
              value: 'any branch',
            },
            {
              feature: '<b>Multisite</b>',
              value: '✅',
            },
            {
              feature: '<b>Install from subdirectories</b>',
              value: '✅',
            },
            {
              feature:
                '<b>Check directory</b><br />Validates a Repository and checks wether a valid WordPress theme or plugin is found.',
              value: '✅',
            },
          ].map(({ feature, value }, i) => (
            <Row key={i}>
              <CellBody className={styles.cellFeature}>
                <p dangerouslySetInnerHTML={{ __html: feature }} />
              </CellBody>
              <CellBody className={styles.cellValue}>{value}</CellBody>
            </Row>
          ))}
        </TBody>
      </Table>
      <PricingSupport />
    </div>
  );
};

export default Home;
