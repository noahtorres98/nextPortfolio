import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}
