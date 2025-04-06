import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
