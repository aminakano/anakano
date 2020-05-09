import Link from "../components/Link";
const NavLink = () => (
  <>
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
    <style jsx>
      {`
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
          text-decoration: underline;
        }
        li.selected {
          font-weight: bold;
        }
      `}
    </style>
  </>
);
export default NavLink;