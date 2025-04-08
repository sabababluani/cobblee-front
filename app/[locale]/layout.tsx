import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cobbler",
  description: "Caffee in Tbilisi",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const fontClass = locale === "ka" ? "font-bpg" : "font-david";

  return (
    <NextIntlClientProvider>
      <html lang={locale} className={fontClass}>
        <head>
          <Script
            id="clarity-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "r0k2siof4x");
            `,
            }}
          />
        </head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
