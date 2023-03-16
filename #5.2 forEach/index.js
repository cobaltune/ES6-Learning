/* HTML DOM 메소드와 forEach 메소드를 통해
data 변수에 담긴 할 일들을 화면에 띄우기 */

/* 조건

  1. forEach 메소드를 활용해주세요.
  2. 할 일들은 li태그로 만들어 주세요.
  3. 할 일들은 기본적으로 item 이라는 클래스를 가지고 있어야 합니다.
  4. 할 일 중에서 isClear 프로퍼티가 true인 할 일은 done 이라는 클래스도 추가해 주세요.
  5. 할 일들에 1부터 시작하는 번호를 매겨주세요. (ex) 1. 게임하기 2. 쇼핑하기 3. ...)
  6. 할 일들은 <ul class="list"></ul>태그 안에 넣어주세요. */

const list = document.querySelector('.list');
const data = [
  {
    title: '자바스크립트 공부하기',
    isClear: true,
  },
  {
    title: '쓰레기 분리수거',
    isClear: false,
  },
  {
    title: '고양이 밥주기',
    isClear: true,
  },
  {
    title: '독서하기',
    isClear: false,
  },
  {
    title: '영어 공부하기',
    isClear: false,
  },
];

// answer sheet
data.forEach((todo, i) => {
  // 1번 조건
  const li = document.createElement('li'); // 2번 조건

  if (todo.isClear) {
    li.classList.add('item', 'done'); // 4번 조건
  } else {
    li.classList.add('item'); // 3번 조건
  }

  li.textContent = `${i + 1}. ${todo.title}`; // 5번 조건
  list.appendChild(li); // 6번 조건
});

/* 코드 해석

[ 1번 조건 ]
: data 변수에 forEach 메소드를 사용


[ 2번 조건 ]
: document.createElement('li')을 활용하면,
  li태그 형태의 요소 노드를 만들 수 있음


[ 3, 4번 조건 ]
: 조건문을 활용해서
  요소의 isClear 프로퍼티가 true 라면 'item'과 'done' 클래스를 추가하고,
  그렇지 않은 경우에는 'item' 클래스만 추가

  +) if문 외 작성할 수 있는 조건

    // 삼항 조건 연산자 활용
    todo.isClear
      ? li.classList.add('item', 'done')
      : li.classList.add('item');

    // 논리 연산자 활용
    li.classList.add('item', todo.isClear && 'done');


[ 5번 조건 ]
: li태그안에 내용 추가

  콜백 함수의 (index) 파라미터와 todo 파라미터의 title 프로퍼티,
  그리고 li 요소 노드의 textContent 프로퍼티 활용

  *index는 0부터 시작하니깐 `+ 1`이 필요하다는 점 유의


[ 6번 조건 ]
: 템플릿의 가장 첫 줄에 있는 list 변수에 <ul class="list"></ul>가 담겨있으니
  이 변수를 그대로 활용해서 list 변수에 append 메소드 사용 */
