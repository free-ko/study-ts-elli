{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';

  type Num = number;
  const one:Num = 1;

  // 밑에 타입같은 경우 key, value 도 동일하게 적용해야 불평을 안합니다.
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  const ko: Student = {
    name: 'Ko',
    age: 31,
  }

  /**
   * String Literal Types
   * Union 타입과 연관성이 있습니다.
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';

  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isBoal:Boal = true;
}
