import Head from "next/head";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Lautaro Chaar" />
        <link rel="icon" href="/purplePng.png" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
