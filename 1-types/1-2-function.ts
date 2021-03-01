{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  // id는 string으로 많이 사용 됩니다.
	// Promise 결과 값이 number이기 때문에
	// 함수의 return 타입이 Promise<number>입니다.
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript
  // Optional parameter
  // 전달 해도 되고 하지 않아도 되는 인자 옆에 '?'를 붙여 줍니다.
	// 혹여 lastName: string | undefined라고 명시를 할 경우
	// printName('Ellie', undefinde)이렇게 undefined라고 명시를 해야 합니다. 하지 않으면 불평을 합니다.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie');   // 원래 인자 1개만 넣었다고 불평함
  printName('Anna');    // Optional parameter 때문에 불평을 하지 않습니다.

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();     // 인자를 넣지 않아도 위의 함수 인자에 default pararmeter를 설정했기 때문에 불평을 하지 않습니다.


  // Rest parameter : 인자들을 배열로 받아 올 수 있습니다.
  // number[] : 숫자 타입의 배열 입니다.
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);   // reduce함수는 결과 값을 게속 누적시켜주는 함수 입니다.
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
