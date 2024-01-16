let number = +prompt("Nhập vào số nguyên dương bất kỳ:");
let sum = 0;

if (!isNaN(number)) {
    let i = 1;

    while (i <= number) {
        if ((number % 4 === 0 && i <= number - 2) || (number % 4 === 3 && i <= number - 1) || (number % 4 !== 0 && number % 4 !== 3)) {
            sum += i;
            console.log(i);
        }

        i++;
    }

    console.log('Tổng: ' + sum);
} else {
    console.log("Không hợp lệ");
}
