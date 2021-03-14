{ // Local Scrope

	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}


	class CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7;   // 외부에서 접근 불가
		private coffeeBeans: number = 0;

		
		private constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		// static 키워드를 붙여서 오브젝트를 만슬 수 있는 함수를 제공한 다는 것은
		// 생성자를 이용해서 생성하는 것을 금지하기 위해서 사용 함
		// 그래서 이럴 경우 constructor를 private로 만들어서 항상 static 메소드를 이용할 수 있도록 권장함
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		// 밑의 함수를 통해서 내부의 상태를 변경할 수 있도록 만들었습니다.
		// 전달 받은 인자가 유효한지 유효하지 않은지를 검사함으로써 안정성 있는 코딩 가능
		fillCoffeeBeans(beans: number) {
			if(beans < 0) {
				throw new Error('Value for beans should be greater than 0');
			}
			this.coffeeBeans += beans;
		}
	
		makeCoffe(shots: number): CoffeeCup {
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {   
				throw new Error('Not enough coffee beans!');
				
			}
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
	
			return {
				shots: shots,  
				hasMilk: false,
			}
		}
	}
	
	// constructor에 private를 걸어서 밑에 코드 작동 안되는 사실을 통해
	// static 함수가 있다는 사실을 예상 할 수 있음
	// CoffeeMaketer.을 입력해보면 'makeMachine'이라는 함수가 있다는 사실을 알 수 있음
	// 즉 'makeMachine'을 통해 오브젝트를 만들어야 한다는 사실을 알 수 있음
	const maker = CoffeeMaker.makeMachine(32)

	// 제약사항이 없어 외부에서 오브젝트 상태를 유효하지 않는 상태로 만들 수 있는 위험한 상황 발생
	// maker.coffeeBeans = -34 // invalid 함

	// 이런식으로 내부 상태를 변경 가능
	maker.fillCoffeeBeans(32);
}