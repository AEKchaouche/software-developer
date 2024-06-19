// creating object user
let user = {
    // property
    firstName: 'aek',
    lastName: 'ami',
    age:12,
    email:'test@gmail.com',
    skills:['html', 'CSS', 'js', 'python'],
    Active:true,
    // nested object
    phoneNumber:{
        fisrt:'022222222222',
        second:'03333333333',
    },
    address: {
        Quebec:'st-george',
        Ontario:'toronto',
    },
    // method
    isActive:function() {
        if(user.age >= 18)
            return 'available';
        else {
            return 'not available';
        }
    }

}

console.log(user.age)
console.log(user['email'])
console.log(user.isActive())