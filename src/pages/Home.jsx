import CertificateForm from "../components/CertificateForm";
import CertificateResult from "../components/CertificateResult";
import { useState } from "react";

const Home = () => {
  const [verified, setVerified] = useState(null);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Certificate Verification Portal</h1>
      <CertificateForm setVerified={setVerified} />
      {verified && <CertificateResult verified={verified} />}
    </div>
  );
};

export default Home;
