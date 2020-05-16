import Layout from "../../components/MyLayout";
import Main from "../../components/Main";
import data from "../../public/json/data.json";
import WorkTitle from "../../components/Work/WorkTitle";
import WorkDesc from "../../components/Work/WorkDesc";
import WorkSlide from "../../components/Work/WorkSlide";

const work = data.work;
const Page = () => (
  <>
    <Main bg="#25252b">
      <WorkTitle title={work[0].title} />
      <WorkSlide />
      {/* <h1>This is work</h1> */}
      <WorkDesc desc={work[0].content} />
    </Main>
  </>
);

export default Layout(Page);
