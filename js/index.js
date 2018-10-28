let n = parseInt(prompt('Введіть порядковий номер числа Фібоначчі'));

let first = 1;
let second = 1;
let next = 0;

while (n <= 0) {
    n = parseInt(prompt('Введіть ціле додатне число'));
}

// якщо використовувати parseFloat замість parseInt, то можна використовувати ще наступний цикл
//while (n % 1 !== 0) {
//    n = parseInt(prompt('Введіть ціле додатне число'));
//}

while (Number.isNaN(n)) {
    n = parseFloat(prompt('Введіть ціле додатне число'));
}

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
}
alert(next);
