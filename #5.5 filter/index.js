/* filter 메소드를 활용해서
김씨 성을 갖지 않은 사람들을 추려낸 다음 notKims 변수에 담기 */

const seoul = [
  '김영훈',
  '김윤수',
  '김동욱',
  '강대위',
  '김영준',
  '김규식',
  '김태호',
  '김효신',
  '손효준',
  '김현승',
  '김재하',
  '김유나',
  '김재훈',
  '김혜선',
  '김민환',
  '김규리',
  '김소원',
  '김우재',
  '최영준',
  '김태순',
  '김종훈',
  '김성환',
  '김승용',
  '김지혜',
  '이승욱',
  '김도현',
  '김승규',
  '윤하은',
  '김유진',
  '김정민',
  '김혜정',
  '김예진',
  '김여진',
  '김성희',
  '김혜수',
  '김인선',
  '김상필',
  '김혜진',
  '서상원',
  '김상혜',
  '김민기',
  '김그루',
  '김희지',
];

// my answer
const notKims = seoul.filter(function (str) {
  if (str[0] != '김') {
    return true;
  }
});

// answer sheet ex 1)
const notKims = seoul.filter((name) => {
  return name[0] !== '김';
});

// answer sheet ex 2)
const notKims = seoul.filter((name) => name[0] !== '김');

// 테스트 코드
console.log(notKims);

/* 코드 해석
콜백 함수가 실행될 때,
이름을 담고 있는 요소의 0번 인덱스 글자가 '김'인지 아닌지를 확인 */
