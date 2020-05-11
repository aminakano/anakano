import Layout from "../components/MyLayout";
import Main from "../components/Main";
import Index from "../components/Index";

const Page = () => (
  <>
    <Main bg="#10b1b0">
      <Index 
        title="Frontend Developer" 
        name="Ami Nakano" />
    </Main>
  </>
);

export default Layout(Page);
