// ES6

class User {
    constructor(username, email, passsword){
        this.username = username
        this.email = email
        this.passsword = passsword
    }
    encryptpassword(){
        return `${this.passsword}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai','chai@gmail.com','123')

console.log(chai.encryptpassword());
console.log(chai.changeUserName());

// behind the scene 

function User1 (username, email, passsword){
    this.username = username
        this.email = email
        this.passsword = passsword
}

User1.prototype.encryptpassword = function (){
     return `${this.passsword}abc`
}
User1.prototype.changeUserName = function (){
    return `${this.username.toUpperCase()}`
}

const tea = new User1 ('tea','Tea@gmail.com','123')

console.log(tea.encryptpassword());
console.log(tea.changeUserName());