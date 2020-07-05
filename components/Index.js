import React from "react";

const Index = ({ title, name, lang }) => (
  <>
    <h1 className={lang}>{name}</h1>
    <p className={lang}>{title}</p>
    <style jsx>
      {`
        p {
          font-size: 2rem;
        }

        @media screen and (max-width: 600px) {
          h1 {
            font-size: 3rem;
          }

          p {
            font-size: 1.25rem;
          }

          p.jp {
            font-size: 1rem;
          }
        }
      `}
    </style>
  </>
);

export default Index;
