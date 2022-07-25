{
  /**
   *  Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');    // move('')인자를 입력 할 때에 type Direction 에 설정한 값들만 입력 할 수 있다고 보여줍니다. 또한 다른 값들은 인자로 넣을 수 없습니다.
  move('up');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;
  const bigTitle:TileSize = 32;

  // Union 타입 예시
  // function: login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
