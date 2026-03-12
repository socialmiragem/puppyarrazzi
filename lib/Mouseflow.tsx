"use client" // ensures this runs only on the client

import Head from "next/head";

export function Mouseflow() {
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window._mfq = window._mfq || [];
            (function() {
              var mf = document.createElement("script");
              mf.type = "text/javascript";
              mf.defer = true;
              mf.src = "//cdn.mouseflow.com/projects/32d4c164-08af-4535-ad4d-f1f62dc771fd.js";
              document.getElementsByTagName("head")[0].appendChild(mf);
            })();
          `,
        }}
      />
    </Head>
  );
}