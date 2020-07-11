import Layout from "../../components/MyLayout";
import Main from "../../components/Main";
import CertificateShow from "../../components/CertificateShow";
import data from "../../public/json/data.json";
const certs = data.certificates;
import window from "global";
import { Component } from "react";
import { useEffect } from "react";
import NoSSR from "react-no-ssr";

class Page extends Component {
  render () {

    // const div = document.getElementById("cert-container");
    //   console.log(div)
    return (
      <>
        <Main bg="#a5d0e1">
          <NoSSR>
            <div id="cert-container">
              {certs.map((cert, i) => (
                <CertificateShow
                  certPath={cert.certificate}
                  org={cert.name}
                  key={i}
                />
              ))}
            </div>
          </NoSSR>
        </Main>
        <style jsx>
          {`
            div {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              width: 80%;
              margin: 2% 20%;
              overflow-y: scroll;
            }

            @media screen and (max-width: 600px) {
              div {
                margin: 15% 5% 25%;
              }
            }
          `}
        </style>
      </>
    );
  }
}
// const Page = () => (
//   <>
//     <Main bg="#a5d0e1">
//       <div>
//         {console.log(window)}
//         {certs.map((cert, i) => (
//           <CertificateShow certPath={cert.certificate} org={cert.name} key={i} />
//         ))}
//       </div>
//     </Main>
//     <style jsx>
//       {`
//         div {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           width: 80%;
//           margin: 2% 20%;
//           overflow-y: scroll;
//         }

//         @media screen and (max-width: 600px) {
//           div {
//             margin: 15% 5% 25%;
//           }
//         }
//       `}
//     </style>
//   </>
// );

export default Layout(Page);
