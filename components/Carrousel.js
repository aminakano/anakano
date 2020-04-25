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

//     return (
//       <Glide
//         height={400}
//         width={400}
//         autoPlay={true}
//         autoPlaySpeed={2000}
//         dots={true}
//         infinite={true}
//         onSlideChange={() => console.log("slide changed")}
//       >
//         {images.map((image, i) => {
//           <img src={image.img} />
//         })}      
//       </Glide>
//     );
//   }
// }
const imgStyle = {
  height: "400px",
  width: "300px"
}
const Carrousel = () => (  
  <>
    <Glide
          height={300}
          width={400}
          autoPlay={true}
          autoPlaySpeed={2000}
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