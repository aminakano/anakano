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
      `}
    </style>
  </>
);

export default WorkTitle;