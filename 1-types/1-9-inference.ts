/**
 * Type Inference
 */

// string으로 값을 할당 했기 때문에 TS에서 알아서 타입을 string으로 잡아줍니다.
// 이것이 '타입 추론'입니다.
let text = 'hello';

// 만약 text에 숫자 값을 할당하게 되면 타입 에러가 뜹니다.
// text = 111;

// 함수 인자에 타입을 명시하지 않으면 'any'로 잡히게 되어서 모든 타입의 값들이 인자로 들어올 수 있게 됩니다.
// 밑의 인자에 기본 값을 string으로 명시 했기 때문에 string이 아닌 타입이 들어오면 에러가 발생합니다.
function print(message = 'hello') {
  console.log(message);
}
print('hello');

// return 값을 통해 함수의 결과 값의 타입을 TS가 number라고 추론해줍니다.
function add(x: number, y: number): number {
  return x + y;
}

// result의 타입도 추론을 통하여 TS가 number라고 지정해줍니다.
const result = add(1, 2);