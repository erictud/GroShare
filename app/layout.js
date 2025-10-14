import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logoIcon from "./../public/shopping-basket-svgrepo-com.svg";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GroShare",
  description: "Multi-user grocery list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="main-header">
          <div className="logo-container">
            <Image
              src={logoIcon}
              alt="Logo that features a grocery basket"
              width={32}
              height={32}
            />
            <h3>
              <span className="col1">gro</span>
              <span className="col2">Share</span>
            </h3>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
