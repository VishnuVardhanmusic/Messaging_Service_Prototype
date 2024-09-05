import { EB_Garamond } from "next/font/google";
import "../globals.css";
import Provider from "@components/Provider";
import TopBar from "@components/TopBar";
import BottomBar from "@components/BottomBar";

const eb_garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "VV CHAT App",
  description: "Messaging Service Prototype",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${eb_garamond.className} bg-blue-2`}><Provider>
        <TopBar />
        {children}
        <BottomBar /></Provider></body>
    </html>
  );
}
