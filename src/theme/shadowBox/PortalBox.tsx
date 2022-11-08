import React from 'react';
import ReactDOM from 'react-dom';
import { ShadowBox } from '../index';
import { ShadowBoxPropsI } from './ShadowBox';

interface PortalBoxPropsI extends ShadowBoxPropsI {}

const Portal: React.FC<{ children?: JSX.Element | JSX.Element[] | string }> = ({
  children,
}) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? ReactDOM.createPortal(children, document.querySelector('#shadowbox')!)
    : null;
};

const PortalBox: React.FC<PortalBoxPropsI> = ({
  children,
  close,
  size,
  ...props
}) => (
  <Portal>
    <ShadowBox close={close} size={size} {...props}>
      {children}
    </ShadowBox>
  </Portal>
);

export default PortalBox;
