const WorkDesc = ({ desc }) => (
  <>
    <p>{desc}</p>
    <style jsx>
      {`
        p {
          color: #fff;
          position: absolute;
          bottom: -70px;
          text-align: center;
        }
        @media screen and (max-width: 600px) {
          p {
            bottom: -35px;
          }
        }
      `}
    </style>
  </>
);

export default WorkDesc;
