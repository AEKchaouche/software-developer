let marks = 70;
let branch;
switch (true) {
    case marks >= 90:
        branch = "Computer science engineering";
        break;
    case marks >= 80:
        branch = "Mechanical engineering";
        break;
    case marks >= 70:
        branch = "Chemical engineering";
        break;
    case marks >= 60:
        branch = "Elctronincs and communcation";
        break;
    case marks >= 50:
        branch = "Civil engineering";
        break;
    default:
        branch = "Bio technilogy";
        break;
}

console.log(` Student branch name is :  ${branch}`);