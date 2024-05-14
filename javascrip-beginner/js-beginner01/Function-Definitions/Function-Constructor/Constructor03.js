function Phone(serial) {
    console.log(this);
}

let phone1 = new Phone(12345);
let phone2 = new Phone(236589);

function hello(someone) {

    return ` hello ${someone}`;

}
_
console.log(hello("amir"));

