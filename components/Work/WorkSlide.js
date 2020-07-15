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

        @media screen and (max-width: 600px) {
          .cover {
            background: url("/image/iPhone.png") center;
            background-repeat: no-repeat;
            width: 300px;
            height: 300px;
            margin-bottom: 2rem;
          }
        }
      `}
    </style>
  </>
);

export default WorkSlide;