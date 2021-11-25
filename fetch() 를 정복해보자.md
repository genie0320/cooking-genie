#### 망할놈의 fetch().
수년전 당시 한달치 월급을 몽땅 때려 넣어 수강했던 java학원에서도 이놈의 fetch()때부터 정신줄을 놨었고, 그 뒤에 js학원에서도 똑같이 fetch(), async() 부근에서 정신줄을 놓고 결국은 돈만 날렸었다. 이번에 소일거리 삼아 익히게 된 react강의에서도 역시 올것이 오고야 말았다. 그런데 사실... 내가 만들고 싶은 것이 온라인서비스인 이상, 결코 버릴 수 없는 부분인건 맞다. 그때와는 달리 지금은 영어 뿐 아니라 일본어, 한국어로도 유툽 강좌들이 많이 생겼으니, 이번에야 말로 이 망할놈의 fetch()XX를 정복해봐야겠다. 

#### fetch()
예전에는 클라이언트단에서 직접 http 요청을 하기 위해 겁나 복잡한 과정을 거치던가, 외부 라이브러리의 도움을 받아 해결해왔으나, 이제는 브라우저에 내장된 fetch()라는 함수를 통해서 간단히(?) 구현할 수 있게 되었다고 한다. 

#### 사용방법
##### GET : fetch default. 뭔가를 달라고 할 때.
fetch()함수는 1) URL 2) 옵션객체 라는 두개의 옵션을 받아서
Promise타입의 객체를 반환한다. 
* Promise 타입의 객체는 3개의 상태값(pending, resolve, reject)을 가지며, 각기 다른 행동(?)을 지정해줄 수 있다. 
* Promise 에서 에러를 처리하기 위해선 .catch()를 사용한다. 이는 프로미스의 reject()가 호출되면, 자동적으로 실행된다고 한다. 
````
fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(res => console.log(res)) // 콘솔에 뿌려주기. 하지만 읽을 수 없다.
    .then(res => res.json()) // 읽을 수 있게 json으로 변환해주기.
    .then(data => console.log(data)) // json으로 변환한걸 콘솔에 보여주기
````


##### POST : 뭔가를 추가해달라고 할 때.
fetch()를 POST방식으로 쓸 때는 당연하게도, '넣어달라고 부탁할 "무언가"를 같이 전달해야 한다. 이것이 두번째 인자로 들어간다. 
근데 그 두번째 인자가 해괴하게 복잡하다.
````
fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'POST', // 서버님아. 이것 좀 추가해주시면 안될까?
    headers : { 'Content-type': 'application/json; charset=UTF-8', }, // json녀석들인데... 인코딩은 UTF-8 이고.
    body: JSON.stringify({ 
        title: 'foo',
        body: 'bar',
        userId: 1,
    }) // 내가 죄다 json으로 변경해뒀다고! 
}).then(res => console.log(res))
````

##### 주의할 점.
이게 얼마나 큰 주의점인지는 모르겠는데...
* node.js에서는 '브라우저와 같은 window 객체가 없기 때문에' 사용할 수 없고,
* 익스플로러에서도 지원하지 않는다고 한다. 

##### Misc.
서버응답 상태값
* 200 : 성공
    * 201 : 정상처리완료
* 400 : 뭔말인지 모르겠어. 
    * 401 : 인증받고 올래? 
    * 403 : 접근제한구역임.
    * 404 : 그딴거 없다.
* 500 : 서버에러중이다. ㅡ.ㅡ^