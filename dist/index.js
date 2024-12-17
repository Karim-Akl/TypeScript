"use strict";
const addTow = (...numbers) => {
    let result = 0;
    numbers.forEach((n) => result += n);
    return result;
};
console.log(addTow(1, 2, 3, 4, 5));
