const Arrow = ({ triggers, direction, inner }) => (
  <>
    <div onClick={triggers} 
          className={direction}>
      <div className={inner}></div>
    </div>
    <style jsx>
      {`
        .prev {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          width: 60px;
          top: 160px;
          z-index: 100;
        }
        .prev_inner {
          border-right: 3px solid #fff;
          border-bottom: 3px solid #fff;
          height: 25px;
          width: 25px;
          transform: rotate(135deg);
        }
        .next {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          right: 0;
          height: 60px;
          width: 60px;
          top: 160px;
          z-index: 100;
        }
        .next_inner {
          border-right: 3px solid #fff;
          border-bottom: 3px solid #fff;
          height: 25px;
          width: 25px;
          transform: rotate(-45deg);
        }
        .prev:hover,
        .next:hover {
          cursor: pointer;
        }
      `}
    </style>
  </>
);

export default Arrow;