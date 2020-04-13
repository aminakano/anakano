import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab)
const Footer = () => (
  <>
    <footer>
      <ul>
        <a href="https://github.com/aminakano" target="_blank">
          <li>
            <FontAwesomeIcon icon={["fab", "github"]} />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/aminakano/" target="_blank">
          <li>
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </li>
        </a>
        <a href="https://twitter.com/amithecoder" target="_blank">
          <li>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </li>
        </a>
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
          margin-right: 1.25rem;
          font-size: 1.5rem;
          color: #fff;
          font-weight: 200;
          text-transform: uppercase;
          position: relative;
        }
      `}
    </style>
  </>
);

export default Footer;
