/**
 * Let's make a calculator 🧮
 */

// 내가 작성한 코드
//  function calculate(x: string , a: number , b: number) {
//     if(x == 'add') {
//         return a + b;
//     } 
//     else if(x == 'substract') {
//         return a - b;
//     }
//     else if (x == 'multiply') {
//         return a * b;
//     }
//     else if (x == 'divide') {
//         return a / b;
//     }
//     else if (x == 'remainder') {
//         return a % b;
//     }
//  }

// 엘리가 작성한 코드
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, a: number, b: number): number {
        switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('Unknown Cammand');
    }
}


console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
