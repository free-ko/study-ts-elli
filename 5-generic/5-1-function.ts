{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
	// 타입이 보장이 되지 않아 안전하지 않음
  const result = checkNotNullAnyBad(123); 


	// 타입을 알 수 없는 JS 라이브러리에서 예를 들어 쿼리 셀렉트 같이 요소가 리턴 될 수 있고 null이 리턴 될 수 있습니다.
	// 이 때 아이템이 유효한지 유효하지 않은지 확인하는 함수를 만드는 것이 중요합니다.
	// 대신 여기서 문제점은 숫자만 확인 할 수 있다면 문자, 불린 등 다양한 타입을 확인하는 함수를 다 만들어야 하나요?
  // 이 때 제네릭을 사용합니다.
	// 제네릭은 다양한 타입을 받을 수 있습니다.
	function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123); // 숫자를 넣게 되면 number는 숫자 타입으로 결정이 됨
  const boal: boolean = checkNotNull(true);
}