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



// Stack 규격을 먼저 정함
// 그러면 외부에서는 내부를 알 필요 없이
// 밑에 함수만 사용 할 수 있음
interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;       // 사용자가 데이터를 넣어서 우리가 한 단계 감싸는 뭔가를 만든다면 '불변성'을 유지하는 것이 중요해서 'readonly'를 붙임
    readonly  next?: StackNode;   // next: StackNode | undefined; 같은 의미
}

// Stack의 규격에 맞게 다 구현해줘야 됨
// 단일 연결 리스트를 통해 함수 구현
// 단일 연결 리스트에는 'head'가 존재
// 'head'를 통해 할당된 아이템을 찾아 나가는 방식
// 사용자가 value를 넣게 되면 그냥 넣는게 아니라 Node라는 것을 감쌓은 뒤에 'head'가 Node를 가리키고
// 만약에 이전에 'head'가 가리키는 Node가 있다면 그것들을 찾아가는 형식임
// 또한 Node는 데이터를 담고 있는 데이터 타입이기 때문에 따로 타입을 설정함

class StackImpl implements Stack {
    // 외부에서 변경 불가 그렇다고 내부에서 readonly 붙여도 변경 불가함
    // 내부에서 사용하는 이름과 외부에서 사용하는 이름이 동일한 경우 '_'를 붙여서 사용
    // '_'가 있는 변수가 있으면 내부에서만 사용하는 변수가 있고 동일한 이름의 public으로 사용되는 무언가가 있구나 예상 가능
    private _size: number = 0; 
    private head?: StackNode;   // 'head'라는 것을 StackNode를 가리킬 수도 있고 아닐 수도 있음

    constructor(private capacity: number) {}

    // size()함수를 통해 외부에서 size를 정의 할 수 있도록 함
    // setter() 함수 없어서 외부에서는 size라는 정보만 읽을 수 있음 & 내부에서 변경 가능하도록 만듬
    get size() {
        return this._size;
    }

    // 새로운 값이 들어오면 Node를 먼저 만들고
    // 새로운 값이 다음 가리켜야 하는 것은 'head'가 가리키고 있는 값을 가리키도록 하면 됨
    push(value: string) {        
        if(this.size === this.capacity) {
            throw new Error('Stack is full!!!');
        }
        const node: StackNode = {value, next: this.head}    // { value: value, ...} 인자 값과 동일시 value만 작성 가능
        this.head = node;   // head는 들어온 값을 감싼 node를 가리키면 됩니다.
        this._size++;
    }

    // head를 가리키고 있는 값을 pop해야 하므로
    // 이 head가 가리키고 있는 node의 value를 return하면 됨
    // 또한 node가 가리키고 있던 것을 head가 가리키도록 하면 됨
    pop(): string {
        // pop()을 호출 할 때는 Stack에 있는 데이터를 무조건 리턴하는것이 좋음
        // 만약 스택이 빌 경우 즉 undefined일 때 이 pop()을 이용하는 사람은 사용하는 곳 곳 마다 Stack이 비었는지 null 체크를 해야 함
        // 이렇게 되면 값이 있는 지 확인 하는 유효성 코드가 많이 생겨 지져분해짐
        // 그래서 pop()을 만들 때 데이터 즉 Stack에 데이터가 있다고 보장한다고 이야기도 할 수 있고 Stack이 비어있는지 확인해 보라고 강요 할 수도 있음
        // 밑에 코드를 통해 Stack이 비어 있다고 에러를 던져 줍니다. 
        // 즉 pop()을 사용하는 사람에게 pop()을 제대로 사용 할 수 있도록 경고를 날려줌
        // 또 짚고 넘어가야 하는 부분은
        // head가 Node를 가리킬 수도 있고 undefined일 수도 있음
        // 그런데 우리는 밑에 null이라고 작성했음
        // 만약에 this.head === undefined라고 작성하면 
        // 타입스크립트 코드는 strict null check라는 옵셥을 이용해서 조금 더 엄격하게 코딩할 수 있도록 설정해 놓았지만
        // JS랑 연동하게 되면 변수에 null or undefined를 할당 할 수 있음
        // 그런데 head가 null일 경우는 if문이 실행되지 않아서 에러를 던지지 않음 그래서 Stack이 Null인데도 코드가 실행됨 그래서 실시간 에러가 발생함
        // 그래서 밑에 처럼 this.head == null을 하게 되면 null 이나 undefined도 if문에 걸리게 됨
        // 원래 null !== undefined이지만 ==로 비교할 때는 같다고 나옴
        // 그래서 밑에 처럼 null과 undefined를 둘다 커버할 수 있는 코드를 작성하는 것이 좋음
        if (this.head == null) {
            throw new Error('Stack is empty!!!');
        }
        const node = this.head;    // 제거하고자 하는 node 그런데 node는 있을 수도 있고 없을 수도 있음 Stack이 빌경우도 있기 때문
        this.head = node.next;     // value가 가리키고 있었던 것을 head가 가리킬 수 있도록 합니다.
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