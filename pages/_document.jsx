import Document, { Html, Head, Main, NextScript, } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Gtm } from 'components/gtm'
import { Gfont } from 'components/gfont'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),

        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  }
  render() {
    const id = 'GTM-XXXXXXX'
    return (
      <Html>
        <Head>
          {/* <Gfont url="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&display=swap"/> */}
          {/* <Gtm id={id} /> */}
        </Head>
        <body>
          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe
              src="https://www.googletagmanager.com/ns.html?id=${id}"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            />`,
            }}
          /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}