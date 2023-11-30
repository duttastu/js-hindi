class hello {
    constructor(uname){
        this.uname =uname
    }
    logme(){
        console.log(`username is ${this.uname}`);
    }
}
class Teacher extends hello{
    constructor(uname,email,password){
        super(uname)
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.uname}`);
    }
}

const chai = new Teacher("abc","chai123@teacher.com","1223")
chai.addCourse()
chai.logme()
const tea=new hello("abc")
tea.logme()

console.log(chai instanceof hello);