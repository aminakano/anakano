const WorkTitle = ({ title }) => (
  <>
    <h2>{title}</h2>
    <style jsx>
      {`
        h2 {
          color: #fff;
          position: absolute;
          top: -75px;
        }

        @media screen and (max-width: 600px) {
          h2 {
            font-size: 1.25rem;
            top: -35px;
          }
        }
      `}
    </style>
  </>
);

export default WorkTitle;