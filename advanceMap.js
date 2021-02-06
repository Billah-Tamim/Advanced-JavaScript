const student = [
    {id: 21, name: 'mehidi hasan sami'},
    {id: 33, name: 'tamim'},
    {id: 56, name: 'sumon'},
    {id: 15, name: 'Siam Ahmed'}
];

const nameList = student.map( s => s.name);
const ids = student.map( i => i.id);
console.log(nameList);
console.log(ids);
const big = student.filter( x => x.id>21);
console.log(big);
const bigOne = student.find( x => x.id>21);
console.log(bigOne);