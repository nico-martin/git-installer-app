import React from 'react';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import github from '@public/img/screenshot-github.jpg';
import wp from '@public/img/screenshot-wp.jpg';
import cn from '@common/classnames';
import styles from './Intro.module.css';

const Intro: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { formatMessage } = useIntl();
  return (
    <div className={cn(className, styles.root)}>
      <Image
        alt={formatMessage({ id: 'home.image.wp' })}
        className={cn(styles.img, styles.imgWP)}
        src={wp}
        width={1000}
        height={1000}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <Image
        alt={formatMessage({ id: 'home.image.github' })}
        className={cn(styles.img, styles.imgGitHub)}
        src={github}
        width={1000}
        height={1000}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      {/*<span className={styles.loaderWrapper}/>*/}
    </div>
  );
};

export default Intro;
