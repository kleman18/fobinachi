const n = parseInt(prompt('Введіть порядковий номер числа Фібоначчі'));

let first = 1;
let second = 1;
let next = 0;

if (n === 1) {
    alert(first);
}

else if (n === 2) {
    alert(second);
}

else {
    for (let i = 3; i <= n; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    alert (next);
}
