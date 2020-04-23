import Link from "../components/Link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <>
    <header>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/work">
          <li>Work</li>
        </Link>
        {/* <li>Contact</li> */}
      </ul>
    </header>
    <style jsx>
      {`
        header {
          background: transparent;
          height: 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          top: 30px;
          right: 0;
        }
        ul {
          display: flex;
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
        li::after {
          position: absolute;
          bottom: 0;
          left: 0;
          content: "";
          height: 1px;
          width: 100%;
          background: #fff;
          opacity: 0;
          transition: 0.5s;
        }
        li:hover {
          cursor: pointer;
        }
        li.selected {
          font-weight: bold;
        }
      `}
    </style>
  </>
);

export default Header;
