import { useIntl } from 'react-intl';
import type { NextPage } from 'next';
import styles from './_app.module.css';

const FourOFourPage: NextPage = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{formatMessage({ id: '404.title' })}</h1>
    </div>
  );
};

export default FourOFourPage;
