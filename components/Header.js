import Language from "../components/Language";
import NavLink from "../components/NavLink";

const Header = () => (
  <>
    <header>
      <NavLink />
      <Language />
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

        @media screen and (max-width: 600px) {
          header {
            top: 0;
            width: 100%;
          }
        }
      `}
    </style>
  </>
);

export default Header;
