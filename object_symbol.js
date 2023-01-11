let user = {
  userName: "Vadim",
  age: 11,
  gender: male,
  job: QA,
  id: 1,
};
let symbol = Symbol("some new id");
user[symbol] = 500;
console.log(user);
