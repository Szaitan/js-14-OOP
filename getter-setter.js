'use strict';
const account = {
  owner: 'Mike',
  movments: [10, 20, 200, 400],

  // getter is like a function which acts as property
  get latest() {
    return this.movments.slice(-1).pop();
  },

  // setter is similar to get but needs to have one parameter
  // it's not mandatory to have the same name for getter and setter
  set latest(move) {
    this.movments.push(move);
  },
};

// the diffrence in calling getter and setter is that they are like parameters
// getter
console.log(account.latest); // 400
// setter
account.latest = 666;
console.log(account.movments); // Array(5) [ 10, 20, 200, 400, 666 ]

// We can use getter and setter for verificaiton of data
// for example if the fullname was used or not
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  caclAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hi, my name is ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Checkout we are using set for a parameter which already exisits !!!
  // So for the parameter which is passed into cosntructor we are setting a setter, which is checking if the name has two parts.
  // If not we receive a warning, if yes we create new property ._fullName.
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  // But we want to have property fulnnName not_fullName. For this we can use getter
  get fullName() {
    return this._fullName;
  }
}

const mike = new PersonCL('Mike Krepi', 1990);
console.log(mike.age); // 47
console.log(mike.fullName); // Mike Krepi
