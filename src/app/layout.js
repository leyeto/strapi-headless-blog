import { Lato, Open_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import "@/styles/styles.sass";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Headless Blog NextJs",
  description: "Headless CMS Blog using NextJs and Strapi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${openSans.variable} ${lato.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
