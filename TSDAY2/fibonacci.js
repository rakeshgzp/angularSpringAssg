var count = 2, a = 0, b = 1, c;
console.log(a);
console.log(b);
while (count < 10) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
    count++;
}
