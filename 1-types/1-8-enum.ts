{
  /**
   * Enum
   */

  // JavaScript
	// 고정 값으로 상수 값들을 선언
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

	// 최대한 Enum 비슷하게 사용하기 위해 freeze를 이용하여 상수 값들을 한 꺼번에 모아 놓음
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
	// Enum대신 'Union' 사용
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

	// Enum을 명시 할 때 앞에만 대문자로 작성합니다.
	// Enum에 값을 지정하지 않으면 차례대로 0부터 값을 저장합니다.
  enum Days {
    Monday,      // 0
    Tuesday,     // 1
    Wednesday,   // 2
    Thursday,    // 3
    Friday,      // 4
    Saturday,    // 5
    Sunday,      // 6
		Birth = 777,  // 이렇게 값을 지정할 수 있습니다.
	  MyDay = '5월 10일'  // 이렇게 값을 지정할 수 있습니다.
	}
  
	// 타입이 보장되면서 간편하게 값들을 지정할 수 있습니다.
  console.log(Days.Monday);   // 0 출력

	// Enum의 문제점
	// 새로운 값들을 계속 할당 할 수 있습니다.
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

	// Union으로 지정한 값들만 사용할 수 있기 때문에 타입이 보장되어 집니다.
  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}