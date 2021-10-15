"use strict"

const view = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["khsunkh", "hkim", "jooalim"],
    psword: ["1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    sucess: true,
                });
            }
        }

        return res.json({
            sucess: false,
            msg: "로그인에 실패하셨습니다.",
        })
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
