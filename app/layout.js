import { Montserrat } from "next/font/google";
import "./styles/global.scss";

const montserrat = Montserrat({
})

export const metadata = {
  title: "Resume Daler Abdurahimov",
  description: "Resume Daler Abdurahimov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
