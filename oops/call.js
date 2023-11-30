function Setusername(username){
    this.username=username
    console.log("called");
}
function createusername(username,email,password){
    Setusername.call(this,username)

    this.email=email;
    this.password=password;
}

const hell=new createusername("abc","abc@jk.com","123")
console.log(hell);