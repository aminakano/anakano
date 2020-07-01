import Layout from "../../components/MyLayout";
import { Component } from "react";
import Main from "../../components/Main";
import WorkTitle from "../../components/Work/WorkTitle";
import WorkDesc from "../../components/Work/WorkDesc";
import WorkSlide from "../../components/Work/WorkSlide";
import Arrow from "../../components/Work/Arrow";
import SlideImages from "../../components/Work/SlideImages";
import data from "../../public/json/data.json";
const work = data.work;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render () {
    const styles = {
      container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      list: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem",
      },
    };
    const contents = work.map((item, i) => (
      <div key={i} style={styles.list}>
        <WorkTitle title={item.title} />
        <SlideImages img={item.img} url={item.url} />
        <WorkDesc desc={item.content} />
      </div>
    ))

    const trigger = () => {
      this.setState(state => {
        return state.count < work.length - 1
          ? { count: state.count + 1 }
          : { count: 0 };
      });
    }

    const reverseTrigger = () => {
      this.setState(state => {
        return state.count === 0
          ? { count: work.length - 1 }
          : { count: state.count - 1 }
      });
    }

    return (
      <>
        <Main bg="#25252b">
          <WorkSlide>
            <Arrow direction="prev" inner="prev_inner" triggers={reverseTrigger} />
            {contents[this.state.count]}
            <Arrow direction="next" inner="next_inner" triggers={trigger} />
          </WorkSlide>
        </Main>
      </>
    );
  }
}

export default Layout(Page);