{
  /**
   * Type Assertions 💩
   */
  
	// JS는 타입이 없기 때문에 어떤 값을 리턴하는지 시스템적으로 컴파일이 모름
	// JS때문에 return되는 타입을 TS가 모름
	function jsStrFunc(): any {
    return 2;
  }

	// 그래서 result의 length의 API 함수를 사용할 수 없음 
	const result = jsStrFunc();

	// 하지만 result의 타입을 string이라고 확신한다고 TS에서 이야기 해주는 것이 Type Assertion입니다.
  // 그러나 result의 타입이 number일 때 TS는 에러라고 이야기 해주지 않습니다.
	// 컴파일 실행 후에 'undefined'가 뜨며 어플리케이션이 죽거나 Exception이 발생하지는 않습니다.
	console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;

	// 밑에 코드를 작성 후 컴파일 실행하면 어플리케이션이 종료 되고 타입 에러가 발생했다고 이야기 해줍니다.
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

	// '!'은 옵셔널 '?'(또는)과 정 반대의 개념입니다. 
  const numbers = findNumbers()!; // 함수 뒤에 '!'에 사용해도 되고 밑에 처럼 코드를 작성해도 동일합니다.
	numbers!.push(2); // numbers의 값이 절대 'null'이 아니라고 이야기 해줄 때 '!'을 사용합니다.
  numbers.push(2); // 😱

	// 정말 100% button값이 존재 할 때에 '!'를 사용합니다.
  const button = document.querySelector('class')!;

	// querySelector은 값 or 'null'을 리턴합니다.
	// button.nodeValue를 작성하면 'null'일 수도 있다고 TS가 이야기를 해주어서
	// button이 있을 때에 접근 할 수 있도록 'if'문을 작성합니다.
	if(button) {
		button.nodeValue
	}
}