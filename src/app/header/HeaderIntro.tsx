import React from 'react';
import Image from 'next/image';
import github from '@public/img/screenshot-github.jpg';
import wp from '@public/img/screenshot-wp.jpg';
import cn from '@common/classnames';
import styles from './HeaderIntro.module.css';

const HeaderIntro: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={cn(className, styles.root)}>
    <Image
      alt="Vercel logo"
      src={github}
      width={1000}
      height={1000}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
    <Image
      alt="Vercel logo"
      src={wp}
      width={1000}
      height={1000}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  </div>
);

export default HeaderIntro;
