import { useEffect, useState } from "react";
import API from "../api/axios";
import CertificateCard from "../components/CertificateCard";

function Certificate() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    loadCertificates();
  }, []);

  const loadCertificates = async () => {
    try {
      const res = await API.get("/certificate");

      setCertificates(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🏆 My Certificates</h1>

      {certificates.length === 0 ? (
        <p>No certificates available.</p>
      ) : (
        certificates.map((item) => (
          <CertificateCard
            key={item._id}
            certificate={item}
          />
        ))
      )}
    </div>
  );
}

export default Certificate;