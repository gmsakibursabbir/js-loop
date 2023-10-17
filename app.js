// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i, "__for loop");
}

// while loop

let j = 0;
while (j <= 10) {
  console.log(j, "__while loop");
  j++;
}

// do-while loop

let l = 2;

do {
  console.log(l, "__do-while loop");
  l++;
} while (l <= 10);

// for-in loop

const num = { a: 1, b: 4, c: 7 };

for (const prop in num) {
  console.log(prop + ": " + num[prop]);
}

// for-of loop

const numFor = [31, 22, 31];

for (let value of numFor) {
  console.log(value);
}


// map loop

const numMap = [10, 20, 30]; 
const newMap = numMap.map(valx => valx * 2); 
console.log(newMap); 



const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";
for (; i < len;) {
    gfg += subjects[i + ''];
    //can be increased inside loop
    i++;
}
console.log(gfg)