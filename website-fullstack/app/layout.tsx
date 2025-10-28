//import './global.css';
import Navbar from "./components/Navbar";

export const metadata = {
  title: 'Alfie\'s Website',
  description: 'Personal portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/my-website/global.css"/>
        <link rel="stylesheet" href="/my-website/navbar.css"/>
      </head>
      <body>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
