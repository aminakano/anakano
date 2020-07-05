import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import twitter from "../public/twitter.png";

const Footer = () => (
  <>
    <footer>
      <ul>
        <li>
          <a href="https://github.com/aminakano" target="_blank">
            <img src={github} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aminakano/" target="_blank">
            <img src={linkedin} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/amithecoder" target="_blank">
            <img src={twitter} />
          </a>
        </li>
      </ul>
    </footer>
    <style jsx>
      {`
        footer {
          background: transparent;
          height: 3rem;
          display: flex;
          align-items: center;
          position: absolute;
          top: 35%;
          left: 10px;
        }
        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 10rem;
        }
        li {
          list-style: none;
          margin-bottom: 1.25rem;
        }
        img {
          height: 6rem;
          width: 6rem;
        }

        @media screen and (max-width: 600px) {
          footer {
            width: 100%;
            top: unset;
            bottom: 0;
            left: 0;
            padding-bottom: 1rem;
          }

          ul {
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
            height: unset;
          }

          img {
            height: 4rem;
            width: 4rem;
          }
        }
      `}
    </style>
  </>
);

export default Footer;
