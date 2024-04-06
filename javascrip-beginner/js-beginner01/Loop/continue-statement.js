let content = " ";
let i;
for (i = 1; i < 7; i++) {
    if (i === 4) {
        continue;
    }
    content += "Geeks" + i + "\n" ;
}
console.log(content);