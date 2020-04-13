import Header from "./Header";
import Footer from "./Footer";

const Layout = Page => {
  return () => (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
}


export default Layout;
