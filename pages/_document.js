import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class AnalyticsHead extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en" translate="no">
       <Head>
  {/* Other meta tags and links */}
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
      (function (k) {
        (function (w, d, s, o, f, js, fjs) {
          w[o] =
            w[o] ||
            function () {
              (w[o].q = w[o].q || []).push(arguments);
            };
          (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
          js.id = o;
          js.src = f;
          js.async = 1;
          fjs.parentNode.insertBefore(js, fjs);
        })(window, document, 'script', '_hw', 'https://app.threado.com/widget.js');
        _hw('init', { appId: 68157, minimized: true, token: k });
        _hw('modal', { appId: 68157, instance: 'chat-modal', minimized: true, token: k });
      })('230731135109822_9U>iB');
    `,
    }}
  />
</Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
