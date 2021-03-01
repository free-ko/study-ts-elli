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
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
