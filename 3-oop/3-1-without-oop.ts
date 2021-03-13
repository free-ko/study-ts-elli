{ // Local Scrope

	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	const BEANS_GRAMM_PER_SHOT: number = 7;

	// 얼마나 많은 커피콩이 있는지 정의해야 함
	let coffeeBeans: number = 0;

	// 밑에 함수의 인자, 결과값 타입을 작성 후 타입을 작성
	function makeCoffee(shots: number): CoffeeCup {
		if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
			throw new Error('Not enough coffee beans!');
			// 만약 위의 에러를 던지게 되면 밑에 코드는 실행되지 않습니다.
		}
		coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT

		return {
			shots: shots,   // key와 value 이름이 같다면 shots만 작성해도 됩니다.
			hasMilk: false,
		}
	}

	// 커피콩을 미리 충전해 놓습니다.
	coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;

	const coffee = makeCoffee(2);
	console.log(coffee);

}