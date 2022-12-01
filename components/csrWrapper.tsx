import React, { VFC, useEffect, useRef } from 'react';

// export const CSRWrapper: VFC<{children:React.ReactNode}> = ({children}) => {
export default function CSRWrapper(props:{children:React.ReactNode}) { 

  useEffect(() => {
    console.log(window)
  }, []);

  return (
    <>{props.children}</>
  );
};
