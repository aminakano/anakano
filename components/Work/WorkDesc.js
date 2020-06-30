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
      `}
    </style>
  </>
);

export default WorkDesc;
