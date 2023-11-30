// ES6

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new user("abc","abc@gmail.com","123")
// console.log(chai.encryptPassword());
// console.log(chai.changeusername());

function hell(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
hell.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
const tea=new hell("abc","abc@gmail.com","123")
console.log(tea.encryptPassword());
// console.log(tea.changeusername());