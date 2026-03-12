"use client" // ensures this runs only on the client

import Script from "next/script";

export function Mouseflow() {
  return (
    <>
      {/* Initialize _mfq before loading the script */}
      <Script id="mouseflow-init" strategy="afterInteractive">
        {`window._mfq = window._mfq || [];`}
      </Script>

      {/* Load Mouseflow external script */}
      <Script
        id="mouseflow-script"
        strategy="afterInteractive"
        src="//cdn.mouseflow.com/projects/32d4c164-08af-4535-ad4d-f1f62dc771fd.js"
        defer
      />
    </>
  );
}