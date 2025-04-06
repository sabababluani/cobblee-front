import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Metadata } from "next";

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
        <head></head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
