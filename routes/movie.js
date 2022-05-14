const express = require('express');
const router = express.Router();
const movieController = require("../src/controller/controllerMovie")

const moviecontroller = new movieController()

router.get("/list", moviecontroller.getMovieList)
router.get("/list/upcoming", moviecontroller.getMovieUpComing)
router.post("/detailMovie", moviecontroller.getMovieDetail)

module.exports = router;
