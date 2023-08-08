import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
          {(process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") && (
     
            <script
              data-project-id="hoc6lY87EIPCgE6f3mkBHUXqhupXbbxDqsqj7VTJ"
              src="https://snippet.meticulous.ai/v1/meticulous.js" async
            />
          )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
