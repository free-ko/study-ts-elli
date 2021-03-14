{ // Local Scrope

	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	// CoffeeMaker 클래스 안에는 2개의 속성과, 1개의 constructor와 1개의 함수가 있음
	class CoffeeMaker {
		// 클래스 내부에서 속성(멤버 변수 및 함수)앞에 let, const, function을 적지 않음
		// 밑에 BEANS_GRAMM_PER_SHOT는 변하지 않는 값임(클래스 내부에에서 연결된 정보)
		// 이 클래스를 이용해 만드는 오브젝트 마다 BEANS_GRAMM_PER_SHOT이 중복적으로 데이터가 생성되기 때문에 메모리에 낭비가 될 수 있음
		BEANS_GRAMM_PER_SHOT: number = 7;   // instacne (object) level
		
		// 그래서 앞에 static를 붙이게 되면 클래스 레벨로 지정이 됨
		// 이렇게 되면 클래스를 통해 인스턴스를 만들 때마다 밑에 값이 들어가지지 않음
		// 왜냐하면 클래스와 연결이 되어 있기 때문에
		// 그래서 밑에 this.BEANS_GRAMM_PER_SHOT으로 사용하는게 아닌 --> CoffeeCup.BEANS_GRAMM_PER_SHOT으로 사용해야 됨 즉 클래스에 있는 BEANS_PER_SHOT이라는 데이터에 접근한다는 의미
		static BEANS_GRAMM_PER_SHOT: number = 7;

		coffeeBeans: number = 0;

		// 이 클래스를 가지고 오브젝트 인스턴스를 만들 때 항상 호출 되는 함수 입니다.
		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		// constructor를 호출하지 않고 새로운 커피 기계를 만들 때 밑에 함수를 이용합니다.
		// 이 때에는 얼마나 많은 coffeeBeans를 설정할 건지 초기값으로 받아 올 수 있습니다.
		// 또한 CoffeeMaker를 리턴해주는 함수 입니다.
		// 그래서 함수 안에서 새로운 CoffeeMaker를 만들어서 전달 할 수 있음
		// 그리고 이 함수들은 클래스 안에서 어떠한 속성 값도 필요하지 않음 그래서 'static'을 붙여주면 됨
		// 그러면 외부에서 클래스를 통해 인스턴스를 만들지 않고 간단하게 커피 기계를 만들 수 있음
		// const maker3 = CoffeeMaker.makerMachine(3);

		// 만약 static을 빼게 된다면 
		// 더 이상 const maker3 = CoffeeMaker.makerMachine(3); 클래스 내부 함수 이용 불가
		// 클래스를 통해 만들어진 오브젝트 안에서 makeMachine함수를 이용할 수 있음
		// make.makeMachine(2)이런 식으로 그런데 커피 기계를 만들고 나서 다시 커피 기계를 만든다는건 말이 안됨
		// 그래서 static을 이용

    // JS에서 static 예제
    // 우리가 바로 Math.abs를 통해 사용할 수 있는 이유는
    // 즉 Math라는 클래스를 생성하지 않고 Math 안에 들어 있는 abs를 사용 할 수 있는 것은(클래스 레벨에서 함수를 호출 할 수 있는 이유)
    // abs 함수 앞에 static이 있기 때문입니다.
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}
	
		makeCoffe(shots: number): CoffeeCup {
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {    // 클래스 내부 멤버 변수에 접근하기 위해서는 this를 붙여 줍니다.
				throw new Error('Not enough coffee beans!');
				// 만약 위의 에러를 던지게 되면 밑에 코드는 실행되지 않습니다.
			}
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
	
			return {
				shots: shots,   // key와 value 이름이 같다면 shots만 작성해도 됩니다.
				hasMilk: false,
			}
		}
	}
	
	// new의 의미는 클래스의 인스턴스를 만든다는 의미와 맨 뒤의 ()는 클래스의 생성자 함수를 호출하는 것
	// ()안에 특정 값을 넣으면 위에 코드에서 설정한 coffeeBeans을 초기화 시킬 수 있음
	// new CoffeeMaker(32) : coffeeBeans를 32개로 설정하는 것
	// 즉 maker에 coffeeBenas가 32개 들어있음
	const maker = new CoffeeMaker(32)
}