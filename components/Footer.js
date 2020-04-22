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
          top: 350px;
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
      `}
    </style>
  </>
);

export default Footer;
