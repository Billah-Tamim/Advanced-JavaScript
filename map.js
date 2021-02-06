let number = [3, 5, 6, 9];

let newN = [];
number.map(function(element, index){
    newN.push(element*element);
    console.log(index);
});
console.log(newN);