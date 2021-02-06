const age = [33, 34, 23, 45, 332, 5, 2, 6, 7, 75];
const news = age.slice(4, 7);
console.log(news);
const remove = age.splice(2, 4);
console.log(remove);
console.log(age);

const joinAll = age.join("");
console.log(joinAll);