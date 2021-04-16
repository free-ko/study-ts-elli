export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
}


/**
 * Encapulate the HTML element creation
 */
// 제네릭 사용 대신에 HTMLElemnt를 상속 받기 때문에 HTMLElement만 받을 수 있음
export class BaseComponent<T extends HTMLElement> implements Component {
    
    // readonly를 통해 한 번 만들어진 이후에 읽기만 가능
    // 만든 요소의 상태는 변경 가능하지만 요소 자체를 다른것으로 변경하는 것은 안 됨
    protected readonly element: T;

    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString
        this.element = template.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}