import Layout from "../../components/MyLayout";
import Main from "../../components/Main";
import CertificateShow from "../../components/CertificateShow";
import data from "../../public/json/data.json";
const certs = data.certificates;

const Page = () => (
  <>
    <Main bg="#a5d0e1">
      <div>
        {certs.map((cert, i) => (
          <CertificateShow certPath={cert.certificate} />
        ))}
      </div>
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

export default Layout(Page);
