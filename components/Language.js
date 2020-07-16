import Link from "next/link";
import { useRouter } from "next/router";

const Language = () => {
  const router = useRouter();
  const linkItem = router.pathname.split("/").slice(-1);
  const lang = router.pathname.split("/").slice(-2, -1);

  return (
    <>
      <ul>
        <li className={lang == "" ? "active" : null}>
          <Link href={"/" + linkItem}>
            <a>en</a>
          </Link>
        </li>
        <li className={lang == "jp" ? "active" : null}>
          <Link href={"/jp/" + linkItem}>
            <a>jp</a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          ul {
            display: flex;
            margin-right: 2rem;
          }
          li {
            list-style: none;
            margin-right: 1rem;
            font-weight: 200;
            text-transform: uppercase;
            align-self: flex-start;
            position: relative;
          }
          li:first-child {
            border-right: 1px solid #fff;
            padding-right: 1rem;
          }
          li a {
            color: #fff;
            text-decoration: none;
          }

          li.active a {
            font-weight: bold;
            font-size: 1.1rem;
          }

          @media screen and (max-width: 600px) {
            ul {
              margin-right: 0;
            }

            li {
              margin-right: 0.5rem;
            }
            li:first-child {
              padding-right: 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default Language;
