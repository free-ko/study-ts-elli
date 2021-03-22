// 내 생각
// Stack 구현 하기
// Last in First Out 자료 구조 임
// Push를 하면 데이터를 넣음
// Pop을 하면 맨 나중에 있는 데이터를 꺼냄




// 엘리
// 배열을 쓰지 않고 구현해야 함
// 이때 '연결 리스트'를 사용
// '단일 연결 리스트' 노드가 계속 한 방향으로 가리키는 것
// '이중 연결 리스트' 노드가 양 방향으로 가리킬 수 있음


type StackNode = {
    readonly value: string;       // 사용자가 데이터를 넣어서 우리가 한 단계 감싸는 뭔가를 만든다면 '불변성'을 유지하는 것이 중요해 'readonly'를 붙임
    readonly  next?: StackNode;   // next: StackNode | undefined; 같은 의미
}

// Stack 규격을 먼저 정함
// 그러면 외부에서는 내부를 알 필요 없이
// 밑에 함수만 사용 할 수 있음
interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

class StackImpl implements Stack {
    // 외부에서 변경 불가 그렇다고 내부에서 readonly 붙여도 변경 불가함
    // 동일한 이름의 무언가가 있을 때에는 '_'를 붙여서 사용
    // '_'가 있는 변수가 있으면 내부에서만 사용하는 변수가 있고 public으로 사용되는 무언가가 있구나 예상 가능
    private _size: number = 0; 
    private head?: StackNode;

    constructor(private capacity: number) {}

    // size()함수를 통해 외부에서 size를 정의 할 수 있도록 함
    get size() {
        return this._size;
    }

    push(value: string) {        
        if(this.size === this.capacity) {
            throw new Error('Stack is full!!!');
        }
        const node: StackNode = {value, next: this.head}
        this.head = node;
        this._size++;
    }

    pop(): string {
        if (this.head == null) {
            throw new Error('Stack is empty!!!');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;

        return node.value;
    }
}

const stack = new StackImpl(10);
stack.push('Ko 1');
stack.push('Bob 2');
stack.push('Steve 3');

while(stack.size !==0) {
    console.log(stack.pop());
}