import API from "./axios";

export const getCertificates = async () => {
  const res = await API.get("/certificate");
  return res.data;
};

export const generateCertificate = async (data) => {
  const res = await API.post("/certificate/generate", data);
  return res.data;
};

export const downloadCertificate = async (id) => {
  const res = await API.get(`/certificate/download/${id}`);
  return res.data;
};