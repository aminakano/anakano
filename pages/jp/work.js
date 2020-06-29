import Layout from "../../components/MyLayout";
import { Component } from "react";
import Main from "../../components/Main";
import data from "../../public/json/data.json";
import NoSSR from "react-no-ssr";
import Slider from "react-slick";

// import { Glide } from "react-glide";

import WorkTitle from "../../components/Work/WorkTitle";
import WorkDesc from "../../components/Work/WorkDesc";
import WorkSlide from "../../components/Work/WorkSlide";
import Arrow from "../../components/Work/Arrow";
import SlideImages from "../../components/Work/SlideImages";

//todo: create trigger functions
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
        // justifyContent: "center",
        width: "500px",
        overflowX: "scroll",
      },
      list: {
        width: "500px",
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <Main bg="#25252b">
          <NoSSR>
            <div style={styles.container}>{contents}</div>
          </NoSSR>
        </Main>
      </>
    );
  }
}

export default Layout(Page);