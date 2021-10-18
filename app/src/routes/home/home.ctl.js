"use strict"

const User = require('../../models/User');
// const UserStorage = require('../../models/UserStorage');

const view = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

// object로 export
module.exports = {
    view,
    process,
};

// 위와 같음
// module.exports = {
//     hello: hello,
//     login: login,
// };

