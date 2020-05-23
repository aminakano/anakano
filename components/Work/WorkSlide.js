const WorkSlide = ({ children }) => (
  <>
    <div className="cover">{children}</div>
    <style jsx>
      {`
        .cover {
          background: url("/mac.png");
          width: 700px;
          height: 400px;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
      `}
    </style>
  </>
);

export default WorkSlide;