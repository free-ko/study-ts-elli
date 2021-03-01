{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined : 비었는지 안 비었는지 아직 결정되지 않은 것
  let name: undefined; // 💩
  let age: number | undefined;  // null 보다 이처럼 아직 결정되지 않을 경우를 대비해 많이 사용되어 집니다.
  age = undefined;
  age = 1;
  function find(): number | undefined {   // 데이터가 있거나 없을 때 undefined를 많이 사용합니다.
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;   // 데이터 값이 있거나 없을 때 문맥상 null을 사용하기도 함

  // unknown 💩
  // 어떤 종류의 데이터가 담질지 알 수가 없는 타입이 됨
	// 가능하면 쓰지 않는 것이 좋음
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  // 어떤 것이든 담을 수 있는 변수
	// 가능하면 쓰지 않는 것이 좋음
  let anything: any = 0;
  anything = 'hello';

  // void
  // 아무것도 리턴하지 않으면 void타입이 됨
  function print(): void {
    console.log('hello');
    return;
  }

  // 변수에 void타입을 설정할 경우 undefiend만 선언할 수 있어서 사용하지 않음
  let unusable: void = undefined; // 💩

  // never
  // 어플리케이션에서 예상치 못한 또는 핸들링 할 수 없는 에러가 발생하였을 때 호출 하는 함수 입니다.
	// 에러 메세지를 받아서 never를 리턴하게 됩니다.
	// 그래서 발생한 에러 메시지를 서버로 보내 로그를 남기고 다시 어플리케이션에서 에러를 던질 수가 있습니다.
	// 에러를 던지고 어플리케이션이 죽게 됩니다.
	// 이 함수의 리턴 값을 naver로 명시하게 되면 이 함수를 호출할 경우 리턴할 것이 없으니 그 점을 감안하고 코딩해라는 것과 동일합니다.
	// 또한 리턴되지 않는 경우 중
	// while문을 true로 지정해서 계속 실행되는 되는 상태가 되었을 때 리턴 값이 never가 됩니다.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // objet
  // 원시타입을 제외한 모든 타입을 전달 할 수 있습니다.
	// 심지어 [] 배열 타입도 전달 가능 합니다.
	// 너무 광범위한 타입이기 때문에 쓰지 않는 것이 좋습니다.
	// object를 사용할려면 명확하게 타입을 지정해주어서 사용해야 좋습니다.
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
