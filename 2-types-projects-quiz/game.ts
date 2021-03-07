/**
 * Let's make a game 🕹
 */

// 내가 짠 코드
// let position = {
//     x: 0,
//     y: 0
// }

// type Move = 'up' | 'down' | 'left' | 'right';

// function move(go: Move) {
//     switch(go) {
//         case 'up':
//             return position.y += 1;
//         case 'down':
//             return position.y += -1;
//         case 'left':
//             return position.x += -1;
//         case 'right':
//             return position.x += 1; 
//     }
// }


// 엘리님이 짠 코드
 const position = {
    x: 0,
    y: 0
}

function move(direction: 'up' | 'down' | 'left' | 'right') {
    switch(direction) {
        case 'up':
            position.y += 1;
						break;
        case 'down':
            position.y += -1;
						break;
        case 'left':
            position.x += -1;
						break;
        case 'right':
            position.x += 1; 
						break;
        default:
            throw Error('Unknown Cammand');
    }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
