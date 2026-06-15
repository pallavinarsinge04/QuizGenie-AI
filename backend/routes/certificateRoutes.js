const express = require("express");

const router = express.Router();

const {
  getCertificates,
  createCertificate,
} = require("../controllers/certificateController");

router.get("/", getCertificates);

router.post("/", createCertificate);

module.exports = router;