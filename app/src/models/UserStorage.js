"use strict";

class UserStorage {
    // # 데이터 은닉
    static #users = {
        id: ["khsunkh", "hkim", "jooalim"],
        psword: ["1234", "1234", "123456"],
        name: ["김휘", "휘김", "주아림"]
    };    

    static getUsers(...fields){        
        const users = this.#users;
        if (fields.length > 0) {
            const newUsers = fields.reduce((newUsers, field) => {
                if (users.hasOwnProperty(field)) {
                    newUsers[field] = users[field];
                }
                return newUsers; // reduce 내에서 반환해주어야 newUsers가 갱신됨
            }, {}); // 빈 {}는 reduce 안의 newUsers의 초기값
            return newUsers;
        }
        return users;
    };
}

module.exports = UserStorage;