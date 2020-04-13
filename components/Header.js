import Link from "next/link";

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
        <li>Work</li>
        <li>Contact</li>
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
        }
        li:hover {
          cursor: pointer;
        }
      `}
    </style>
  </>
);

export default Header;
