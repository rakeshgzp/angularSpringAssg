function palindrome(x) {
    var arr;
    if (typeof x == 'number')
        x = x.toString();
    arr = x.split("", x.length);
    if (JSON.stringify(arr) === JSON.stringify(arr.reverse())) {
        console.log("It's Palindrome");
    }
    else {
        console.log("Not a palindrome");
    }
}
palindrome("hello");
palindrome("aaa");
