import { EB_Garamond } from "next/font/google";
import "../globals.css";
import ToasterContext from "@components/ToasterContext";
import Provider from "@components/Provider";


const eb_garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "VV CHAT App",
  description: "Messaging Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${eb_garamond.className} bg-green-50`}><Provider><ToasterContext />{children}</Provider></body>
    </html>
  );
}
