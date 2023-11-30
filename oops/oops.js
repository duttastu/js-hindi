const user ={
    username:"stuti",
    logincount: 8,
    signedin: true,

    getuserdetail: function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getuserdetail());
// console.log(this);

const promiseOne = new Promise()