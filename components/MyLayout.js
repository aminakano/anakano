import Headtag from "./Headtag";
import Header from "./Header";
import Footer from "./Footer";

const Layout = Page => {
  return () => (
    <>
      <Headtag />
      <Header />
      <Page />
      <Footer />
    </>
  );
}

export default Layout;
