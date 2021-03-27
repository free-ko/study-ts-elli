interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
// 타입을 광범위하게 만드는 행위는 정말 위험합니다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 제네릭을 통해 제대로된 함수 구현
// Employee를 구현 가능한 타입을 받을 수 있도록 extends를 제네릭에 제한을 걸 수 있습니다.
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

// K는 T라는 object 안에 있는 key의 타입입니다.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: 'ellie',
  age: 20,
};

const obj2 = {
  animal: '🐕',
};

// obj안에 있는 key만 인자로 넣을 수 있습니다.
console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐕
