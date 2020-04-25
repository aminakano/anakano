import { Component } from "react";
import { Glide } from "react-glide";
import data from "../public/json/data.json";
const images = data.work;
// class Carrousel extends Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     const images = data.work;
//     const slideList = images.map((image, i) => {
//       <img src={image.img} />;
//     });
      
//     return (
//       <Glide
//         height={400}
//         width={500}
//         autoPlay={true}
//         autoPlaySpeed={3000}
//         dots={true}
//         infinite={true}
//         onSlideChange={() => console.log("slide changed")}
//       >
//         {this.props.slideList}   
//       </Glide>
//     );
//   }
// }

const Carrousel = ({children}) => (  
  <>
    <Glide
      height={300}
      width={500}
      autoPlay={true}
      autoPlaySpeed={3000}
      dots={true}
      infinite={true}
      onSlideChange={() => console.log("slide changed")}
        >   
      <img src={images[0].img} />
      <img src={images[1].img} />
      <img src={images[2].img} />
      <img src={images[3].img} />
    </Glide>

  </>
)

export default Carrousel;