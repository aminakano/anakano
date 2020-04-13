import Layout from "../components/MyLayout.js";

const Page = () => (
  <div className="main">
    <h1>Ami Nakano</h1>
    <p>Frontend Developer</p>
    <style jsx>
      {`
        .main {
          width: 100%;
          height: 92vh;
          background-color: #10b1b0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        p {
          font-size: 2rem;
        }
      `}
    </style>
  </div>
);

export default Layout(Page);
