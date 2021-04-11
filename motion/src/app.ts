import { PageComponet } from './components/page.js';

class App {
    private readonly page: PageComponet

    // 에플리케이션을 추가할 최상위 루트 요소를 받아 옵니다.
    // 이것도 동일하게 어떤 HTMLElement든 상관 없음
    constructor(appRoot: HTMLElement ) {
        this. page = new PageComponet();
        this.page.attachTo(appRoot)
    }
}

// 에플리케이션을 시작하면 App 클래스를 만듬
// Dom요소(HTML에 있는) Class document의 요소를 받아 옵니다.
// 여기서 querySelector는 기본적으로 Element타입 또는 Null을 리턴함
// 하지만 우리의 클래스 document는 동적으로 만드는 것이 아니라 index.html에 떡하니 적어 놓았기 때문에
// 즉 에플리케이션이 실행하면서 무언가가 변경되는 것이 아니라 개발할 때 정확하게 정해져 있기 때문에
// '무조건 null이 아니고 HTMLElement 타입이라고 'Type Assertion'을 사용 할 수 있음 (밑에 처럼 '! as HTMLElement)
new App(document.querySelector('.document')! as HTMLElement);