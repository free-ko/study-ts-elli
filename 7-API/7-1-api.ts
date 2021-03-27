class Animal {}

class Cat extends Animal {
	isCat: boolean = true;
}

class Dog extends Animal {
	isDog: boolean = false;
}

// animals에 cat만 있는지 dog만 있는지 확인할려면 어떻게 해야 할까요??
// every 함수를 통해 할 수 있습니다.
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

// Cat만 리턴하는 함수 입니다.
function isCat(animal: Animal): animal is Cat {
	return (animal as Cat).isCat !== undefined;
}

// every가 배열을 돌면서 Cat인지 아닌지 돌면서 확인하면 됩니다.
// 즉 배열안에 있는 각 원소들에게 isCat 함수를 적용해서 Cat인지 아닌지 확인합니다.
// every 함수는 하나라도 조건과 맞지 않으면 false를 리턴합니다.
// 그래서 밑에 코드는 false를 리턴합니다.(배열속에 Dog가 있어서)
animals.every<Cat>(isCat)
