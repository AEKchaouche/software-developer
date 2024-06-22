let user1 = {
    name: 'AEK',

    getName:function() {
        return this.name;
        //Or
        return user1.name;
      
    
    }
}


// Using this in a Method
const person1 = {
    name: 'John',
    age:30,
    greet() {
        console.log('Hello my name is : ' + this.name + ' and I am ' + this.age + ' years old')
    }
 };


console.log(user1.getName());
person1.greet();