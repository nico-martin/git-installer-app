import { JSX } from '@babel/types';
import React from 'react';

const combineProvider = (...components: Array<any>): any => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) =>
      // eslint-disable-next-line react/display-name
      ({ children }: { children: JSX.Element | Array<JSX.Element> }) =>
        (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        ),
    ({ children }: { children: JSX.Element | Array<JSX.Element> }) => (
      <React.Fragment>{children}</React.Fragment>
    )
  );
};

export default combineProvider;
