var i, count = 0;
for (i = 0; count < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
        count += 1;
    }
    else
        continue;
}
