"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    };

    login() {
        const client = this.body;
        const {id, psword} = UserStorage.getUserInfo(client.id);
        if (id) {
            if (psword === client.psword) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    };

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
        // const body = this.body;
        // const {id, psword} = UserStorage.getUserInfo(body.id);
        // if (id) {
        //     if (psword === this.body.psword) {
        //         return {success: true};
        //     }
        //     return {success: false, msg: "비밀번호가 틀렸습니다."};
        // }
        // return {success: false, msg: "존재하지 않는 아이디입니다."};
    };
};

module.exports = User;