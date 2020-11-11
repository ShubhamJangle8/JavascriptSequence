//Sum and average
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers[i] = Math.floor((Math.random() * 100));
    console.log("Number " + i + " we got is " + numbers[i]);
}
let sum = 0;
for (let i = 0; i < 5; i++) {
    sum += numbers[i];
}
let avg = sum / 5;
console.log("Sum : " + sum);
console.log("Average is : " + avg);