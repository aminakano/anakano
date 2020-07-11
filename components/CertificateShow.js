const CertificateShow = ({ certPath, org }) => (
  <>
    <div>
      <img src={certPath} />
      <h3>{org}</h3>
    </div>
    <style jsx>
      {`
        div {
          margin: 1rem;
          color: transparent;
          transition: 0.7s all ease;
          position: relative;
        }

        div:hover {
          cursor: pointer;
          color: #fff;
          z-index: 10;
        }

        img {
          width: 360px;
          height: 240px;
          opacity: 1;
        }

        img:hover {
          filter: brightness(50%);
        }

        h3 {
          text-align: center;
          position: absolute;
          bottom: 110px;
          width: 100%;
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