let content = " " ;
let i ;

for (i = 0 ;  i < 100; i++ ) {
    if ( i === 5) {
        break;
    }
    content += "The number :" + i + "\n" ;
}

console.log(content);

