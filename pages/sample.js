import Layout from "../components/MyLayout";
import dynamic from "next/dynamic";
import { Component } from "react";
import data from "../public/json/data.json";
const Carrousel = dynamic(() => import("../components/Carrousel"), {
  ssr: false,
});
const images = data.work;
const Page = () => (
  <Carrousel>
  </Carrousel>
)

// class Page extends Component {
//   constructor(props) {
//     super(props)
//     props = {
//       images: [
//         { id: 0, text: img1 },
//         { id: 1, text: img2 },
//         { id: 2, text: img3 },
//         { id: 3, text: img4 },
//       ],
//       messages: [
//         { id: 0, text: "hi" },
//         { id: 1, text: "ciao" },
//         { id: 2, text: "tag" },
//         { id: 3, text: "dag" },
//       ],
//     };

//   }
  
//   render() {
//     return (
//       <div className="main">
//         <Carrousel>
//           {this.props.messages.map((message, i) => {
//             <li>{message.text}</li>;
//           })}
//         </Carrousel>
//         <style jsx>{``}</style>
//       </div>
//     );
//   }
// }

export default Layout(Page);
