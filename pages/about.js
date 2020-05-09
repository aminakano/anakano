import Layout from "../components/MyLayout.js";
import About from "../components/About";
import data from "../public/json/data.json";

const about = data.about[0];
const Page = () => (
  <About 
    title={about.title}
    text={about.text} />
);

export default Layout(Page);
