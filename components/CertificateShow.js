import Layout from "./MyLayout";

const CertificateShow = ({ certPath }) => (
  <>
    <div>
      <img src={certPath} />
    </div>
    <style jsx>
      {`
        img {
          width: 400px;
          height: 300px;
        }

        @media screen and (max-width: 600px) {
          img {
            width: 300px;
            height: 200px;
          }
        }
      `}
    </style>
  </>
);

export default CertificateShow;