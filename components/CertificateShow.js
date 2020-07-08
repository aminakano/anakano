const CertificateShow = ({ certPath }) => (
  <>
    <div>
      <img src={certPath} />
    </div>
    <style jsx>
      {`
        div {
          margin: 1rem;
        }
        img {
          width: 360px;
          height: 240px;
        }

        @media screen and (max-width: 600px) {
          img {
            width: 270px;
            height: 185px;
          }
        }
      `}
    </style>
  </>
);

export default CertificateShow;