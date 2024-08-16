import React from 'react';
import cn from '@common/classnames';
import styles from './PageBorder.module.css';

const PageBorderTop: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    className={cn(className, styles.root)}
    version="1.1"
    viewBox="0 0 4000 220"
    enableBackground="new 0 0 4000 220"
    preserveAspectRatio="xMinYMin meet"
  >
    <g transform="matrix(3.0631e-17,-0.500243,33.4651,2.04915e-15,-2023.72,426.297)">
      <path
        d="M707.872,180L412.394,180L412.394,60.472L606.55,60.472L707.872,180Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default PageBorderTop;
