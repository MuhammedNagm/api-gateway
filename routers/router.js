var express = require("express");
var router = express.Router();
const axios = require("axios");

const apiAdapter = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
  });
};

router.use((req, res, next) => {
  console.log("Called: ", req.path);
  next();
});

const USERS_BASE_URL = "http://localhost:8000";
const AGENCY_BASE_URL = "http://localhost:8001";

const usersApi = apiAdapter(USERS_BASE_URL);
const agencyApi = apiAdapter(AGENCY_BASE_URL);

router.get("/users", (req, res) => {
  console.log("users api : ", req.path);
  usersApi
    .get(req.path)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});

router.get("/agencies", (req, res) => {
  console.log("agencies api : ", req.path);
  agencyApi
    .get(req.path)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});
module.exports = router;
