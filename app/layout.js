import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Affinity",
  description: "Fashion House",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className='bg-white dark:bg-black'
      >
        {children}
      </body>
    </html>
  );
}
