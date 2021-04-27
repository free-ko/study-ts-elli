import { BaseComponent, Component } from "./../component.js";

export interface Composable {
  addChild(child: Component): void;
}
type OnCloseListener = () => void;

// 무조건 Component 인터페이스를구현해야 되고
// 여러가지 자식들을 함깨 추가 할 수 있는 Composable 인테페이스를 구현해야 함
// Listener라는 API가 있어야 한다고 규격함
interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  // 아무런 것도 전달받지 않는 생성자가 있고
  // 생성자를 호출하면
  // SectionContainer를 만드는 어떤 클래스라도 괜찮다고 타입을 정의할 수 있음
  // 생성자를 정의하는 타입
  new (): SectionContainer;
};

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer {
  private closeListener?: OnCloseListener;

  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}
export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable {
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component) {
    // 내부에서 클래스를 호출하여 만드는 것은 좋지 않음
    // const item = new PageItemComponent();
    // 외부에서 전달 된 pageItemConstructor를 이용해서 만들 수 있음
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
