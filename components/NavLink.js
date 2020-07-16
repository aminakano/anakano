import Link from "../components/Link";
import { useRouter } from "next/router";
const NavLink = () => {
  const router = useRouter();
  let href;
  router.pathname.split("/")[1] === "jp" ? href = "/jp/" : href = "/";

  return (
    <>
      <ul>
        <Link href={href}>
          <li>Home</li>
        </Link>
        <Link href={href + "about"}>
          <li>About</li>
        </Link>
        <Link href={href + "work"}>
          <li>Work</li>
        </Link>
        <Link href={href + "certifications"}>
          <li>Certifications</li>
        </Link>
      </ul>
      <style jsx>
        {`
          ul {
            display: flex;
            margin-right: 3rem;
          }
          li {
            list-style: none;
            margin-right: 1.25rem;
            font-size: 1rem;
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

          @media screen and (max-width: 600px)
           {
            ul {
              margin-right: 0;
            }

            li {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </>
  );
}
export default NavLink;