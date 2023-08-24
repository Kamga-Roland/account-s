import { Footer, Navbar } from '../components';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="fr">
    <head>
      <link rel="icon" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <title>Account's</title>
    </head>
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
