"use strict"

const app = require("../app");

const PORT = 5500;

// 호스팅
app.listen(PORT, () => {
    console.log("서버 가동");
});