import Layout from "../../components/MyLayout";
import About from "../../components/About";
import data from "../../public/json/data.json";

const about = data.about[1];
const Page = () => (
  <About 
    title={about.title} 
    text={about.text}
    lang="jp" />
);

export default Layout(Page);
