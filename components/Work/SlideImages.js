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
          padding-bottom: 1rem;
          opacity: 0.7;
          transition: 0.5s all ease;
        }

        img:hover {
          transform: scale(1.1);
          opacity: 1;
          padding-bottom: 2.5rem;
        }
      `}
    </style>
  </>
);

export default SlideImages;
