import Header from "./Header";
import "../asset/scss/main.scss";
import "../asset/fonts/fonts.scss";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  );
}


export default Layout;
