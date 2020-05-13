import Layout from "../../components/MyLayout";
import Main from "../../components/Main";
import data from "../../public/json/data.json";
import WorkTitle from "../../components/Work/WorkTitle";

const work = data.work;
const Page = () => (
  <>
    <Main bg="#25252b">
      <WorkTitle 
        title={work[0].title}
      />
      <h1>This is work</h1>
    </Main>
  </>
);

export default Layout(Page);
