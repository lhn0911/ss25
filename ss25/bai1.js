let a = +prompt("Nhập vào số nguyên dương bất kỳ:");
let sum = 0;

if (!isNaN(a)) {
    let i = 1;

    while (i <= a) {
        if ((a % 4 === 0 && i <= a - 2) || (a % 4 === 3 && i <= a - 1) || (a % 4 !== 0 && a % 4 !== 3)) {
            sum += i;
            console.log(i);
        }

        i++;
    }

    console.log('Tổng: ' + sum);
} else {
    console.log("Không hợp lệ");
}
