import Link from "next/link";
const Language = () => (
  <>
    <ul>
      <li>en</li>
      <li>
        <Link href="/jp">
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

export default Language;
