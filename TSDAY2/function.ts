function prime(x: number): void {
    var count: number = 0, n: number = 2, i: number;
    var flag: boolean = true;
    while (count < x) {

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
}

function fibonacci(x: number): void {
    var count: number = 2, a: number = 0, b: number = 1, c: number;
    console.log(a);
    console.log(b);

    while (count < x) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
        count++;
    }
}

function factorial(x: number): void {
    var n: number = x, i: number, temp: number = 1;
    for (i = n; i >= 1; i--) {
        temp = temp * i;
    }
    console.log("Factorial of number is " + temp);
}

function even(x: number): void {
    var i: number, count: number = 0;
    for (i = 0; count < x; i++) {
        if (i % 2 == 0) {
            console.log(i);
            count += 1;
        }
        else
            continue;
    }
}