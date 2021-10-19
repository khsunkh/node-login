"use strict";

const id = document.querySelector("#id"),
    email = document.querySelector("#email"),
    username = document.querySelector("#username"),
    psword = document.querySelector("#psword"),
    pswordConfirm = document.querySelector("#psword-confirm"),
    registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register(e) {
    // e.preventDefault();
    const req = {
        id: id.value,
        email: email.value,
        username: username.value,
        psword: psword.value,
        pswordConfirm: pswordConfirm.value
    };

    console.log(req);
    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error(new Error("회원가입 중 에러"));
    });

}