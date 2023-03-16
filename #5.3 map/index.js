/* 아래의 배열 안에 숨겨진 인물을 찾는 퀴즈

['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING']
  ㄴ 배열 속에 YOUNG이 숨겨져 있음

템플릿에 주어진 배열의 map 메소드를 활용해서
'Y', 'O', 'U', 'N', 'G'을 추출한 새로운 배열을 answer 변수에 담기 */

const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

// answer sheet 1)
// const answer = quiz.map((young, i) => {
//   return young[i];
// });

// answer sheet 2)
const answer = quiz.map((word, i) => word[i]);

/* 이 코드의 경우
  콜백 함수 내부에 단순히 return 문 하나만 있기 때문에
  arrow function으로 간결하게 작성할 수 있음 */

// 테스트 코드
console.log(answer);

// 출력값
['Y', 'O', 'U', 'N', 'G'];

/* 코드 해석
주어진 배열의 각 요소에서, 그 요소에 해당하는 index 번째의 글자를 추출

map 메소드는 argument로 전달한 콜백 함수를
배열의 길이 만큼 반복해서 실행하는 메소드

*forEach 메소드와 다른 점은 콜백 함수가 리턴하는 값을 가지고 새로운 배열을 만들어 리턴함
 그리고 콜백 함수의 첫 번째 파라미터에는 배열의 요소를,
 두 번째 파라미터에는 index를 전달

*Javascript에서는 문자열도 indexing이 가능 */
