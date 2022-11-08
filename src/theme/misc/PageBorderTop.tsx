import React from 'react';
import cn from '@common/classnames';
import styles from './PageBorder.module.css';

const PageBorderTop: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    className={cn(className, styles.root)}
    version="1.1"
    viewBox="0 0 4000 280"
    enableBackground="new 0 0 4000 280"
    preserveAspectRatio="xMinYMin meet"
  >
    <g>
      <path
        fill="currentColor"
        d="M4000,280l-4000,0l0,-275c0,0 901.184,145.011 2000,145c1162.33,-0.011 2000,-145 2000,-145"
      ></path>
    </g>
  </svg>
);

export default PageBorderTop;
