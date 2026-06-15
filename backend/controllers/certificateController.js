const Certificate = require("../models/Certificate");

exports.getCertificates = async (req, res) => {
  const certificates = await Certificate.find();

  res.json(certificates);
};

exports.createCertificate = async (req, res) => {
  const certificate = await Certificate.create(req.body);

  res.json(certificate);
};