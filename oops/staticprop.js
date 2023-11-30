class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const stuti = new User("stuti")
// console.log(stuti.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email

    }
}
const hello=new Teacher("abbs","123@gmail.com")
hello.logme()