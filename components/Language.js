import Link from "next/link";
import { useRouter } from "next/router";
const Language = () => {
  const router = useRouter();
  const linkItem = router.pathname.split("/").slice(-1);
  //todo: style the links
  return (
    <>
      <ul>
        <li>
          <Link href={"/" + linkItem}>
            <a>en</a>
          </Link>
        </li>
        <li>
          <Link href={"/jp/" + linkItem}>
            <a>jp</a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          ul {
            display: flex;
          }
          li {
            list-style: none;
            margin-right: 1rem;
            color: #fff;
            font-weight: 200;
            text-transform: uppercase;
            align-self: flex-start;
          }
        `}
      </style>
    </>
  );
}

export default Language;
