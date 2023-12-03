let newArray= [1,2,[3,4,11,12,13,[5,6,7,[8,9]]]];
let allArray=newArray.flat(Infinity);
allArray.sort((a, b)=> a-b)
console.log(allArray);
