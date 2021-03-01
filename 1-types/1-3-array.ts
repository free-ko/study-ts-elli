{
  // Array
  // 밑의 함수 인자에 readonly는 배열을 받을 수 있는데 Array로 표현할 수 없기 때문에 밑에 인자와 불변성을 위해 같은 string[]으로 표현합니다.
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
   // fruits.push()  이렇게 readonly인 인자에 push를 하게 되면 불평하게 됩니다. readonly는 데이터를 변화시키면 안됩니다.
  }

  // Tuple : 서로 다른 타입을 가질 수 있는 타입
  // Tuple -> interface, type alias, class로 대체해서 사용하면 좋음
  // 튜블 사용 권장 하지 않음
	// Index로 데이터에 접근하는 것이 '가독성'이 떨어짐
	// 밑에 코드를 보면 student[0]안에 무엇이 있는지 예상 할 수 없기에 students배열을 확인해야 됨
	// 오브젝트나 클래스로 접근하게 되면 student.name; 이런식으로 하게 되면 조금은 데이터를 예상 할 수 있음 
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123

  // 위의 배열 인덱스로 접근하는 부분을
	// Object Destructing(구조 분해 할당)을 통해 해결이 가능
	// 밑의 코드는 student의 첫번 째의 값이 name으로 할당되어진 다는 것을 알 수 있음
	// 그러나 여전히 데이터가 정해진 곳이 아니라 이 데이터를 사용하는 곳에서 임의로 name과 age라고 이름을 결정하고 써야되는 단점이 존재 함
  const [name, age] = student;
}
