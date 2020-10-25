var count = 0, n = 2, i;
var flag = true;
while (count < 10) {
    for (i = 2; i < n - 1; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        console.log(n);
        count++;
    }
    flag = true;
    n++;
}
