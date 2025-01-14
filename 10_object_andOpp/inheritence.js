class user {
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`USERNAME is : ${this.username}`);
        
    }
}

// try to inherit user class for other classes 

class Teacher extends user {

    constructor(username, email, password){

        super(username) // using super keyword instead of this and call 
        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`New course add by ${this.username}`);
    }

}

const chai = new Teacher ("Tridip", "Tridip@gmail.com","123abc")

chai.addCourse()
chai.logme()

const masalaChai = new user (" Masala Chai ")
masalaChai.logme()

console.log(masalaChai === chai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof user);


