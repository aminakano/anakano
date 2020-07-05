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
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </>
);

export default WorkSlide;