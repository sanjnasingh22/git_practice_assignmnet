let count = 0;
let num = 9;

for (let i = 1; i <= num; i++) {
  if (num % i) {
    count++;
  }
}

if (count == 2) {
  console.log("Prime Number");
} else {
  console.log("Composite Number");
}
