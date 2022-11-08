import React from 'react';
import cn from '@common/classnames';
import { Icon, IconNamesT, Loader } from '../index';
import styles from './Button.module.css';

const Button: React.FC<{
  appearance?: 'button' | 'none';
  icon?: IconNamesT;
  children?: JSX.Element | Array<JSX.Element> | string;
  iconLeft?: boolean;
  className?: string;
  useAnchor?: boolean;
  loading?: boolean;
  disabled?: boolean;
  size?: 'normal' | 'large';
  [key: string]: any;
}> = ({
  appearance = 'button',
  icon = null,
  children = null,
  iconLeft = false,
  className = '',
  useAnchor = false,
  loading = false,
  disabled = false,
  size = 'normal',
  ...props
}) =>
  React.createElement(
    useAnchor ? 'a' : 'button',
    {
      ...props,
      disabled,
      className: cn(className, styles.button, {
        [styles.appearanceButton]: appearance === 'button',
        [styles.isLoading]: loading,
        [styles.isDisabled]: disabled,
        [styles.isLarge]: size === 'large',
      }),
    },
    <React.Fragment>
      <Loader className={styles.loader} />
      {icon && (
        <Icon
          icon={icon}
          className={cn(styles.icon, { [styles.iconLeft]: iconLeft })}
        />
      )}
      <span className={cn(styles.content)}>{children}</span>
    </React.Fragment>
  );

export default Button;
