import Layout from "../components/MyLayout.js";
import image from "../public/profile.png";

const Page = () => (
  <div className="main">
    <h1>Hi, I'm Ami!</h1>
    <div>
      <img src={image} />
      <p>
        I'm a Japanese Frontend Developer located in the Netherlands. I like
        coding, design and learning new technologies especially JavaScript and
        its libraries. I used to be a secretary, however, I came up with the
        idea of using my creativity in my full-time job and devoted myself into
        a coding bootcamp in Amsterdam, which surely was a fantastic decision.
        Currently I am working on a beautiful webshop as a full-time Frontend
        Intern and recently I have got my first freelance project to build a
        corporate website.
      </p>
    </div>
    <style jsx>
      {`
        .main {
          width: 100%;
          height: 92vh;
          background-color: #d3d3d3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          font-size: 1.25rem;
          font-weight: 300;
          width: 60%;
          line-height: 1.5;
          margin-left: 2rem;
        }

        img {
          border-radius: 50%;
          width: 14rem;
          height: 14rem;
        }
      `}
    </style>
  </div>
);

export default Layout(Page);
