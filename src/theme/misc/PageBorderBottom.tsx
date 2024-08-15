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
    <g transform="matrix(-23.9682,-1.44435e-14,1.03586e-15,-1.66962,6340.58,255.103)">
      <path
        d="M264.541,44.982L264.541,152.791L97.653,152.791L264.541,44.982Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default PageBorderTop;
