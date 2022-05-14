const express = require('express');
const {JWTVerify} = require("../src/middleware/JWTVerify")
const router = express.Router();
const movieController = require("../src/controller/controllerMovie")

const moviecontroller = new movieController()

router.get("/list", JWTVerify, moviecontroller.getMovieList)
router.get("/list/upcoming", moviecontroller.getMovieUpComing)
router.post("/detailMovie", moviecontroller.getMovieDetail)

module.exports = router;
