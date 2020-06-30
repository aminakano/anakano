const SlideImages = ({ img, url }) => (
  <>
    <a href={url}>
      <img src={img} />
    </a>
    <style jsx>
      {`
        img {
          width: 530px;
          height: 330px;
        }
      `}
    </style>
  </>
);

export default SlideImages;
