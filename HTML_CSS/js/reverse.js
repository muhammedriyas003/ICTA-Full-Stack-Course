var num = 123, rem = 0, rev = 0;


u = reve(num);
console.log(u);

function reve(x) {

    while (x > 0) {


        rem = x % 10;
        rev = rev * 10 + rem;
        x = parseInt(x / 10);
    }

    return rev;
}

