import Layout from "../../components/MyLayout";
import { Component } from "react";
import Main from "../../components/Main";
import data from "../../public/json/data.json";
import WorkTitle from "../../components/Work/WorkTitle";
import WorkDesc from "../../components/Work/WorkDesc";
import WorkSlide from "../../components/Work/WorkSlide";
import Arrow from "../../components/Work/Arrow";

//todo: create trigger functions
const work = data.work;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render () {
    return (
      <>
        <Main bg="#25252b">
          <WorkTitle title={work[0].title} />
          <WorkSlide />
          {/* <h1>This is work</h1> */}
          <WorkDesc desc={work[0].content} />
        </Main>
      </>
    );
  }
}

export default Layout(Page);