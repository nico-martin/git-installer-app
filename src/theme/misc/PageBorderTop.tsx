import React from 'react';
import cn from '@common/classnames';
import styles from './PageBorder.module.css';

const PageBorderTop: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    className={cn(className, styles.root)}
    version="1.1"
    viewBox="0 0 4000 180"
    enableBackground="new 0 0 4000 180"
    preserveAspectRatio="xMinYMin meet"
  >
    <g transform="matrix(1.02228,0,0,0.756869,-89.127,-31.9233)">
      <path
        d="M4000,42.178L4000,280L87.184,280L4000,42.178Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default PageBorderTop;
