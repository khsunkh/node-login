"use strict"

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

// object로 export
module.exports = {
    home,
    login,
};

// 위와 같음
// module.exports = {
//     hello: hello,
//     login: login,
// };
