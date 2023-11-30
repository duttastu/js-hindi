function multipyby5(num){
    return num*5
}
multipyby5.power=2

// console.log(multipyby5(9));
// console.log(multipyby5.prototype);
// console.log(multipyby5.power);

function createuser(username,score){
    this.username=username;
    this.score=score;
}
createuser.prototype.increment=function(){
    this.score++
}
createuser.prototype.printme=function(){
    console.log(`score is ${this.score}`);
}
    
const chai = new createuser("chai",99)
const tea = new createuser("tea",98)

chai.printme()
tea.printme()