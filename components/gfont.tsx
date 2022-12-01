import { VFC } from 'react';

export const Gfont: VFC<{url:string}> = (props) => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href={props.url} rel="stylesheet"/>
    </>
  );
};