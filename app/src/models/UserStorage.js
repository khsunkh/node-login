"use strict";

const fs = require("fs").promises;

class UserStorage {
    // # 은닉
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    };

    static getUsers(...fields){        
        // const users = this.#users;
        if (fields.length > 0) {
            const newUsers = fields.reduce((newUsers, field) => {
                if (users.hasOwnProperty(field)) {
                    newUsers[field] = users[field];
                }
                return newUsers; // reduce 내에서 반환해주어야 newUsers가 갱신됨
            }, {}); // 빈 {}는 reduce 안의 newUsers의 초기값
            return newUsers;
        };
        return users;
    };

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch((err) => console.error(err));
    };

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.username.push(userInfo.username);
        return {success: true};
    }
};

module.exports = UserStorage;