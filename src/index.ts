
// function add(...numbers:number[]) : number{
//   let result=0;
//   for (let i = 0; i < numbers.length; i++) {
//     result+=numbers[i];
//   }
//   numbers.forEach((n)=> result+=n);
//   return result;
// }
// console.log(add(1,2,3,4,5));

const  addTow = (...numbers:number[]):any =>{
  let result=0;
  numbers.forEach((n)=> result+=n);
  return result;
}

console.log(addTow(1,2,3,4,5));