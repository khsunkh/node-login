"use strict"

const express = require("express");
const router = express.Router();

// 컨트롤러 import
const ctrl = require("./home.ctl");

// 라우팅
router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router;