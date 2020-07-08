import Layout from "../../components/MyLayout";
import Main from "../../components/Main";
import CertificateShow from "../../components/CertificateShow";
import data from "../../public/json/data.json";

// const certs = data.certificates;
const Page = () => (
  <>
    <Main bg="#a5d0e1">
      <div>
        <CertificateShow certPath={data.certificates.fcc} />
      </div>
    </Main>
  </>
);

export default Layout(Page);
