import React from 'react';
import cn from '@common/classnames';
import styles from './Table.module.css';

export const Table: React.FC<{
  children: JSX.Element | Array<JSX.Element>;
  minWidth?: number;
  className?: string;
  classNameWrapper?: string;
}> = ({ children, minWidth = 600, className = '', classNameWrapper = '' }) => (
  <div className={cn(classNameWrapper, styles.tableWrapper)}>
    <table
      className={cn(className, styles.table)}
      style={{ minWidth: minWidth }}
    >
      {children}
    </table>
  </div>
);

export const THead: React.FC<{
  children: JSX.Element | Array<JSX.Element>;
  className?: string;
}> = ({ children, className = '' }) => (
  <thead className={cn(className, styles.thead)}>{children}</thead>
);

export const TBody: React.FC<{
  children: any;
  className?: string;
}> = ({ children, className = '' }) => (
  <tbody className={cn(className, styles.tbody)}>{children}</tbody>
);

export const Row: React.FC<{
  children: JSX.Element | Array<JSX.Element>;
  className?: string;
}> = ({ children, className = '' }) => (
  <tr className={cn(className, styles.row)}>{children}</tr>
);

export const CellBody: React.FC<{
  children?: any;
  className?: string;
  [key: string]: any;
}> = ({ children, className = '', ...props }) => (
  <td className={cn(className, styles.cell, styles.cellBody)} {...props}>
    {children}
  </td>
);

export const CellHeading: React.FC<{
  children?: any;
  className?: string;
  [key: string]: any;
}> = ({ children, className = '', ...props }) => (
  <th className={cn(className, styles.cell, styles.cellHeading)} {...props}>
    {children}
  </th>
);
