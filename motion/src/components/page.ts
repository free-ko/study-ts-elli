export class PageComponet {
    
    // 이것은 HTML의 카드들의 목록을 담고 있음
    private element: HTMLUListElement;

    constructor() {
        // 우리가 필요한 페이지 컨테이너 요소를 만듦
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponent'
    }

    // PageComponent의 API = Class PageComponet의 Method

    // PageComponent를 만들어서 필요한 곳에다가 이 페이지를 추가 할 수 있는 API
    // HTML의 어떤 Element든 다 받을 수 있음
    // 또한 어떤 Position에 어디에다가 추가할 수 있는지 인자로 받아오면 더 유연한 API를 만들 수 있음
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        // insertAdjacetElement API는 parent 컴테이너 안에 있는 어딘가에 자식 요소를 추가 할 수 있음
        parent.insertAdjacentElement(position, this.element);
    }

}