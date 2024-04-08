let content = " ";
let i;
for (i = 1; i < 7; i++) {
    if (i === 3 || i === 4) {
        continue
    }
    content += "The number :" + i + "\n"
}
console.log(content);