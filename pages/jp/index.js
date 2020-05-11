import Layout from "../../components/MyLayout";
import Main from "../../components/Main";
import Index from "../../components/Index";

const Page = () => (
  <>
    <Main bg="#10b1b0">
      <Index title="フロントエンドエンジニア" name="中野亜美" lang="jp" />
    </Main>
  </>
);

export default Layout(Page);