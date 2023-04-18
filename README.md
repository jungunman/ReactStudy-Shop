# React로 쇼핑몰 만들기

## Bootstrap 다운
터미널창에 입력
```bash
npm install react-bootstrap bootstrap
```
다운 끝.

## Bootstrap 사용법
사이트 주소 \
https://react-bootstrap.netlify.app/docs/getting-started/introduction

이쪽에서 원하는 기능을 추가하면 됨.\
App.js에서는 \
import { 추가한 컨테이너 이름} from 'react-bootstrap'; 을 넣어주면 된다.

## React 이미지 넣는 법
CSS파일에서 작업하는 것이 좋음
```css
.클래스이름{
  height: 350px;
  object-fit: cover; //사이즈 조절
  background-image: url("이미지 경로"); //이미지 넣는 곳
  background-position: center;
}
```
이렇게 넣어주고 app.js에 클래스 이름을 붙여주면 됨.

HTML 상에서 넣는 방법도 있지만, 더 번거로움\
그래도 적어보자면, 
```javascript
import 변수명 from "이미지 경로"
<div className='main-bg' style={{backgroundImage : `url(${변수명})`}}></div>
```
이렇게 사용하면 된다.

## 이미지 크기 조절
```javascript
<img width="90%" height="80%" src= {product1}/>
```
이렇게 가능함.\
object-fit이 안되기에 css가 더 깔끔하고 이쁨.

## public 폴더 사용법
리액트는 사이트 발행전에 html,js,css를 압축하게 된다.(building)\
public 폴더 안에 있는 것을 경로 가져올 때는 
```javascript
<img src="/이미지 경로" />
```
처럼 가지고 와도 되서 편함!\
만약 사이트 경로가 많아질 경우 아래 코드를 이용하면 됨.
```javascript
<img src={process.env.PUBLIC_URL+"/이미지 경로"} />
```

## Import, Export 
데이터 및 자료가 많으면 다른 파일을 만들고 Export 하고,\
Import해서 자료를 가져오면 됩니다.

### 하나의 자료를 내보낼 땐 export default 변수명 형식으로 내보내면 됩니다.
```javascript
const serverData = [{
  자료이름1 :자료1
  자료이름2 :자료2
}]

export default serverData;
```

### 하나의 자료를 받을 땐 받을 js 파일에서 아래 코드를 작성합니다.
```javascript
import 변수명 from '받을 데이터 경로';
```

### 여러 개의 자료를 내보내는 방법
```javascript
const 변수명1 = 1;
const 변수명2 = 2;

export {변수명1,변수명2};
```

### 여러 개의 자료를 받을 땐 받을 js 파일에서 아래 코드를 작성합니다
```javascript
import {변수명1,변수명2} from '받을 데이터 경로'
```
<strong>주의할 점</strong>\
Export할 때의 변수명과 Import할 때의 변수명이 다르면 안됩니다.


## 리액트 라우터 셋팅이랑 기본 라우팅
react-router-dom 라이브러리를 쓰면 if문 떡칠 안해도 됩니다.\
6버전 설치함.
```bash
npm install react-router-dom@6
```

그다음 /src/index.js 파일 열고
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

<App />을 <BrowserRouter>로 감싸면 된다.\
<BrowserRouter>를 Import 하는 것은 필수!

```javascript
import { BrowserRouter } from 'react-router-dom';
```

App.js 파일로 돌아와서
```javascript
import { Routes, Route, Link} from 'react-router-dom'
```
임포트는 라우츠와 라우트 링크를 react-router-dom로부터 Import 해주면 사용 준비끝!

### 사용하는 방법은?
```javascript
<Routes>
  <Route path='/경로' element={HTML코드 및 컴포넌트}/>

  //EX
  <Route path='/detail' element={<div>상세 페이지입니다</div>}/>
</Routes>
```
Routes로 Route를 감싸고,\
Route에는 path와, element를 넣어준다. \
이렇게 하는 이유 : 리액트는 SPA이기 때문!


### LINK사용법
```javascript
<Link to="/">홈</Link>
```
a 태그랑 같은 역할을 한다.

## destructuring 문법
배열들과 오브젝트들을 가져올 떄, 이름을 한번에 명하는 것을 말한다.\
아래와 같은 것들을 말한다.
```
const [state,setState] = useState(0);
export let {changeName, changeCount} = user.actions
```


## useNavigate 사용법
Hook임 => 유용한 것들을 모아둔 함수.
```javascript
let navigate = useNavigate();
```
이렇게 변수로 만들어주고 사용하면 됨.
```javascript
<button onClick={()=>{navigate("경로")}}>Navigate 사용법</button>
```
이렇게 사용하는 이유는 Link 컴포터트를 사용했을 때 안 이쁘기 때문에!\
사용법 숙달 이슈가 있을수도 있음.


## nested routes / outlet 사용법
nested routes 는 route를 만들 때 경로가 비슷한 것들을 모아두는 곳이라고 생각하면 됩니다.\
사용법은 아래와 같습니다.
```javascript
<Route path="/상위경로" element={<div>HTML 코드1</div>}>
          <Route path="하위경로1" element={<div>HTML 코드1</div>} />
          <Route path="하위경로2" element={<div>HTML 코드2</div>} />
        </Route>
```
HTML코드1을 누르게 되면 url에서는 이렇게 보인다.\
도메인.com/상위경로/하위경로1

outlet은 하위 경로로 진입하면 보일 css를 어디다가 보여줄 것인지 위치를 정해주는 것이다.
```javascript
return (
    <>
        <div>회사 정보 페이지</div>
        <button>멤버</button>
        <button>회사위치</button>
        <Outlet></Outlet>
    </>
    );
```
이 경우 회사위치 아래에 하위경로1의 CSS가 들어간다.


## URL 파라미터 다루기
URL의 파라미터로 서버에서 받아온 데이터 값을 뿌려주면 한페이지로 여러 페이지를 복사 가능하다.\
작성법은 아래와 같다.
```javascript
<Route path='/detail/:파라미터' element={<div>HTML 코드</div>}/>
```
이렇게 파라미터를 꽃아 넣을 수 있고 여러 파라미터도 넣을 수 있다.\
react-router-dom 라이브러리를 설치해야 한다.\
가져오는 방법은 아래와 같다.
```javascript
import { useParams } from 'react-router-dom';

//함수 내에 선언
const {파라미터 이름} = useParams();

<h4>파라미터 이름의 값 : {파라미터 이름}</h4>
```

## styled-components를 사용하여 CSS 적용하기
라이브러리 설치 먼저
```bash
npm install styled-components
```
그 후 사용법
```javascript
import styled from 'styled-components';

let ColorwBtn = styled.button`
  background :${ props => props.bg};
  color : ${props => props.bg === "blue" ? "white" : "black"};
  padding : 10px;
`

//함수 내 리턴값에 선언
<ColorwBtn bg="blue">버튼</ColorwBtn>
```
형태를 보면 이것도 하나의 컴포넌트라고 생각할 수 있다.\
근데 난 이게 불편하다.

CSS파일로 작업하려면 페이지의 이름을 다르게 해서 적용하는 방법도 있다.\
파일명.module.css \
형태로 작성하고 import해서 사용하면 됩니다.


## Lifecycle 과 useEffect

### 컴포넌트의 Lifecycle
페이지에 장착되기도하고 (mount)\
가끔 업데이트도 되고 (update)\
필요 없으면 제거되고 (unmount)

알아두면 좋은 점 => 라이프 사이클 중간중간에 실행할 코드를 껴서 실행시킬 수 있음.

예전 컴포넌트 구조에 간섭하는 방법
```javascript
class Detail2 extends React.Component{
  componentDidMount(){
    컴포넌트가 마운트 될때 실행할 코드 작성
  }
  componentDidUpdate(){
   컴포넌트가 업데이트 될 때 실행할 코드 작성
  }
  componentWillUnmount(){
    컴포넌트가 삭제될 때 실행할 코드 작성
  }
}
```

요즘 컴포넌트 구조에 간섭하는 방법
```javascript
import { useEffect } from 'react';

//컴포넌트 함수 내에 작성
useEffect(()=>{
    mount, update시 여기 코드 실행
  }, []);
```
### useEffect(실행할 함수 , [state모음])의 , [] 이건 Dependency
[]안의 state가 변할때만 실행된다.
근데 []이렇게만 써놓으면 mount 할때만 실행된다.

### useEffect 내의 return => useEffect 동작 전에 실행되는 코드!
```javascript
useEffect(()=>{
  //리턴 후에 실행될 코드
  return ()=>{
    //useEffect 실행 전에 실행되는 코드!
    //기존 코드 치우는거를 여기에 많이 작성함!
    //ex = 기존 데이터 요청 제거해주세요!
  }
})
```
아것을 Clean up function이라고 부름\
잘 활용하면 효율이 좋아진다!

### useEffect는 언제 사용하나요?
실행시점이 약간 다르다.\
HTML을 먼저 보여주고 나서 복잡한 작업을 실행하게 해준다.\
1.시간이 좀 걸리는 코드는 useEffect에 넣어서 실행시키자.\
2.서버에서 데이터 가져오는 작업\
3.타이머 장착하는 작업

부가기능을 가진 side Effect를 useEffect에 사용하자.

### 타이머 다루기
```javascript
setTimeout(()=>{실행할 코드}, 1000)
```
초는 ms임. 1000 = 1초.

### useEffect 요점 정리
1. 재랜더링마다 코드 실행하고 싶으면\
useEffect(()=>{ 실행할 코드 }); 

2. mount시 1회 코드 실행하고 싶으면
useEffect(()=>{ 실행할 코드 }, []);

3. unmount시 1회 코드 실행하고 싶으면
useEffect(()=>{ return ()=>{ 실행할 코드 } });

4. clean up function 시
useEffect(()=>{ return ()=>{ 실행할 코드 } });


## input tag에 숫자만 넣기 경고창까지 함께
```javascript
<input type='text' minLength={1} onChange={(e)=>{
                  const regex = /^[0-9]+$/;
                  if (regex.test(e.target.value)){
                    setText(e.target.value);
                    setAlert(false);
                  }else{
                    e.target.value = text;
                    setAlert(true);
                  }
                }}/>
```

## Component 내의 props 쉽게 쓰는 꿀팁
```
function 함수명 ({프롭스명1,프롭스명2}){
  <div>프롭스명1</div>
  <div>프롭스명2</div>
}
```
이렇게하면 props.state명 안써두 됨.


## Ajax 사용하기
1. 어떤 방법 (get/post) \
2. 어떤 자료 (url) \
형태로 작성할 것.

3가지 ajax 사용법이 있다.\
1. XMLHttpRequest\
2. fetch()\
3. axios

요즘 많이 사용하는 것은 axios\
axios 라이브러리 이용할거므로 설치
```bash
npm install axios
```

사용방법은 아래와 같다. import 필수!
```javascript
import axios from 'axios';
axios.get(`get요청할 url`)
                  .then((결과)=>{
                    결과.data
                    데이터가 가져왔을 때 쓰는 곳
                  })
                  .catch(()=>{
                    에러났을 때 쓰는 곳
                  });
```
fetch 방법도 있는데, JSON을 벗겨주는 작업이 필요하므로\
코드 해석할 때 이외에는 안쓰는 것으로 한다.\
하지만 코드는 해석해야하니까 사용 방법은 아래와 같다.
```javascript
fetch('get요청할 url').then((결과)=>{결과.json}).then((data) => {})
```
기본 골자는 이런 느낌?\
딱봐도 복잡하다. 그냥 axios 쓰자.

## get요청을 여러개 하고 싶을 땐 Promise.all([])
두 개의 get 요청의 데이터를 모두 가져왔을 때 실행시켜준다.\
사용방법은 아래와 같다.
```javascript
Promise.all([ axios.get("get요청할 url"),axios.get("get요청할 url1")])
.then((결과)=>{ 결과.data
데이터 모두 가져왔을 대 쓰는 곳})
.catch(()=>{에러났을 때 쓰는 곳});
```

## Component 전환 애니메이션 주기 (Transition)
부착하면 애니메이션 나오는 className 하나 만들고 원할 때 땠다 붙였다 하면 됨.\
방법의 순서는 아래와 같다.

1. 애니메이션 동작 전 className 만들기\
2. 애니메이션 동작 후 className 만들기\
3. className에 transition 속성 추가\
4. 원할 때 2번 className 부착

사용 방법은 아래와 같다.
```javascript
 function TabContents(props){
  //useState로 땠다 붙였다 기능하기 위해 State 만듬
    const [fade, setFade] = useState('');

    useEffect(()=>{
      setFade('end');
      return (()=>{
        setFade('');
      });
    }, [props.tabs])

    return(
   <div className={`start ${fade}`}>
    {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][props.tabs]}
   </div>
    )
  }

```
이렇게 하면 이론상 땠다 붙였다 하지만 문제가 발생한다.


### 리액트의 automatic batching 기능 때문에 문제
리액트는 state 변경이 일어날 때마다 재랜더링을 해줬었는데, \
데이터 효율 때문인지 붙어있는 setState들의 변경이 되면 재랜더링을 한번만 해준다.\
그렇기 때문에 setTimeOut(()=>{실행할 코드},시간)을 써줘야 한다.\
임의로 setState의 간격을 넓히는 셈.\
코드는 아래와 같다.
```javascript
 function TabContents(props){
    const [fade, setFade] = useState('');

    useEffect(()=>{
      let timer = setTimeout(()=>{
        setFade('end')
      }, 10);
      return (()=>{ 
        clearTimeout(timer);
        setFade('');
      });
    }, [props.tabs])


    return(
   <div className={`start ${fade}`}>
    {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][props.tabs]}
   </div>
    )
  }
```
timer도 return 에서 지워주는 것이 센스다.\
useEffect에서 return은 본 함수보다 먼저 실행되는 것 꼭 기억하자!


## State 관리를 위한 Context API 그러나.. 잘 사용 안함 (성능이슈)
Redux Toolkit 씀.\
그래도 그런 코딩 있으면 이해하기 위해 배운다...!

안쓰는 이유\
1. 성능이슈 => state 안쓰는 놈들까지 재랜더링 해버림.\
2. 컴포넌트 재활용이 어려움

사용방법은 아래와 같다.\
app.js에 createContext import!
```
1. app.js 함수 바깥에 export const Context = creatContext();\
2. state 공유하고 싶은 컴포넌트를 <Context.Provider>로 감싼다.\
3. <Context.Provider value={{ 공유 원하는 state 다 넣기 }}>\
4. 사용하고 싶은 컴포넌트에서 import 한다.
=> import{Context} from './../app.js'
5. 컴포넌트 함수 내에서 const {state이름, state이름1} = useContext(Context);하면 이제 Context 사용 가능.

객체형식으로 반환하니 저렇게 사용가능.
```

## 그래서 redux를 알아봅니다!
리덕스는 state를 통으로 만들어서 props의 도움 없이도 state를 뿌려줄 수 있다.\
리덕스는 pagckge.json 파일을 열어서\
react-dom 와 react 가 18.1.x 버전 이상이여야 문제 없다.\
기업체라면 18.1 이상은 쓰겠지.. 설마...!\
설치 방법은 아래와 같다.
```bash
npm install @reduxjs/toolkit react-redux
```

### 리덕트 쓰기 위해서 할 셋팅!
1. src 하위에 store.js를 만든다\
그리고 아래 코드를 붙여 넣는다.
```javascript
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { }
}) 
```
2. 그리고 index.js 가서 <Provider store={store}>로 감싼다.\
모습은 아래와 같다.
```javascript
import store from './store.js';
<Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
```
store를 임포트하는 것은 잊지말자!\
셋팅 끝!

## 리덕스 사용법
아래 코드를 export하기 전에 삽입한다.
```javascript
const user = createSlice({
    name : "user",
    initialState : "김희성"
});

export default configureStore({
  reducer: { 
    user : user.reducer
  }
}) 
```
위의 코드를 보면\
1. useState하는 createSlice를 하고\
2. reducer:{} 부분에 추가한다.\
3. 데이터 부분을 보면 user.reducer가 보일 것이다! 중요!

등록은 끝났다.\
이제 할 부분은 저 리덕스를 가져가서 쓰는 것!\
사용할 해당 파일에 아래 코드를 추가한다.
```javascript
const state = useSelector((state)=>{return state});
```
useSelector((state)=>{return state})는 아래처럼 생략 가능하다.
```javascript
const state = useSelector((state)=> state );
console.log(state.user);

//값 : 김희성
```
모든 데이터를 redux에 넣을 필요는 없고,\
자주 쓰이는 state가 아니라 해당 페이지에서만 쓰는 state라면\
그냥 useState()쓰자...

### redux state 변경하는 법
아래 코드의 reducers를 주목하라!
```javascript
const user = createSlice({
    name : "user",
    initialState : "김희성",
    reducers : {
        함수명1(기존 state){
            return '애기씨 남편' + state
        },
        함수명2(){
          return ...
        }
    }
});

export let {함수명1,함수명2} = user.actions
```
reducers 안에는 여러 함수를 넣을 수 있고,\
그 함수들을 export 해서 사용할 수 있다.\
redux에서는 변수명.actions를 하면 함수가 담기고,\
맨 밑의 코드처럼 export 할 수 있다.\
export 했으면 import는 필수다~\
import 후에 useDispatch()를 써준다.
<strong>
dispatch는 store.js로 요청보내주는 함수다.
</strong>
방법은 아래와 같다.

```javascript
//Cart.js 내부 코드
import { useDispatch } from "react-redux";
const dispatch = useDispatch();

<td><button onClick={()=>{
  dispatch(changeName());
  console.log(state.user);
}}>+</button></td>
```

### redux state 변경하는 법 요약
1. state 변경하는 함수 만들기
2. export
3. dispatch(state변경함수())

## redux array,object state 변경법
```javascript
 changeName(state){
            state.name = "유진초이";
            // return {name:"유진초이", age:20}
        }
```
위처럼 직접 수정해도 가능하다.

### 함수에 파라미터 뚫기 및 payload
매개 변수를 입력 받아 좀 더 동적으로 만들기\
ex => 게시글 20개씩 받아보기
```javascript
changeAge(state, 매개변수-보통 action이라고 작명함){
            state.key명 += 매개변수.payload;
        }
```
payload를 붙여야 컴포넌트에서 받아온 매개변수를 제대로 인식\
action은 변경해주는 함수들이라고 생각하면 됨.


### localStorage에 store에 있는 statte들을 자동으로 저장해주는 외부 라이브러리 : redux-persist
이건 추후에 써보고 유용함을 느껴보자.\
보안이슈는 없겠지?

### 다른 state 관리 라이브러리 : Jotal, Zustand
더 쉽다는데 많이 쓰게 되면 그때 배우기.

## localStorage로 Client 측에서 데이터 임시 보관
localStorage는 문자 형식으로만 저장 가능
```javascript
localStorage.setItem("key","value");
```

### Object/Array 형식을 문자로 변환해서 저장하고 꺼내기
문자로 변경하는 방법은 아래와 같다.
```javascript
localStorage.setItem("key",JSON.stringify(obj or arr));
```
문자를 오브젝트 및 배열로 변경하는 방법은 아래와 같다.
```javascript
const 변수명 = localStorage.getItem(JSON.parse(obj or arr));
```

### Set()을 쓰면 arr 중복을 제거할 수 있음.
```javascript
let 변수명 =  [1,2,2,3,1];
변수명 = Set(변수명); // 중복을 허용하지 않는 함수
변수명 = Array.from(변수명); // 다시 arr로 변환
```

## 실시간 데이터를 쓴다면 react-query
언제 쓸까?

1. ajax 성공시/실패시 다른 html을 보여주려면?\
2. 몇초마다 자동으로 ajax 요청?\
3. 실패시 몇초 후 요청 재시도?\
4. prefetch?

설치 먼저 합시다.
```bash
npm install react-query
```

index.js 파일 안에 다음 코드 추가
```javascript
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<QueryClientProvider client={queryClient}>
    <Provider store={store}>
      
        <App />

    </Provider>
  </QueryClientProvider>
)
```
앱을 감싸고 있는 것들을 모두 감싸주자.
```javascript
let result = useQuery("user", async() =>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((e)=>{
      console.log("ajax 요청됨.")
      return e.data
    }),//endThen
    {staleTime : 2000} //요청 시간 제어
  });//endQuery
```
이렇게 하면 데이터를 뽑아 올 수 있다. \
ex : result.data.객체key

또 , result에 가져오는 값들로 쉽게 error가 났는지, loading중인지 알 수 있다.
```javascript
{ result.isLoading && '로딩중' }
{ result.error && '에러남' }
{ result.data && result.data.name }
```

## 성능개선1 : 개발자도구 & lazy import
크롬 확장 프로그램에서 react developer tools 설치하면 컴포넌트 구조를 미리볼 수 있다.\
설치 완료 하면, 개발자도구에서 Component 탭을 눌러서 구조를 볼 수 있음

크롬 확장 프로그램에서 redux devTools 설치하면 리덕스의 state 변하고 있는지, 어떤 변경함수가 실행됐는지 알수 있음.\

### SPA 특징
발행하면 js파일 하나에 모든 코드 다 쑤셔넣음.\
파일 사이즈가 엄청 큼\
그래서 로딩 속도가 좀 느림.


### lazy import로 속도 조금 더 개선해보자.
app.js 파일에 보면 처음에는 Detail,Cart,About 등 처음에는 필요 없는 import 파일들이 있다.\
이게 필요해질 때 불러주는 방법으로 속도를 조금 더 개선 시킬 수 있다.
```javascript
import { lazy } from 'react';
const Detail = lazy(()=>import('./pages/Detail.js'));
const Cart = lazy(()=>import('./pages/Cart.js'));
const About = lazy(()=>import('./pages/About.js'));
```
이렇게 하면 사이트 발행할때 별도의 js 파일로 분리됩니다.\
단점이 있음.\
불러와야 해서 약간의 로딩시간이 있음.
그럴 땐, Suspense Component로 감싸주면 된다.
```javascript
<Suspense fallback={<div>로딩중입니다.</div>}>
        <Routes>
          Route 여러개~
        </Routes>
      </Suspense>
```
이렇게 한번에 다 감싸도 상관없단다!\
이러면 로딩중에 보여주는 페이지까지 완성!

## 성능개선 2 : 재랜더링 막는 memo, useMemo

### memo
컴포넌트가 재랜더링 되면, 거기 안에 있는 자식컴포넌트들도 재랜더링 되는데,\
자식 컴포넌트가 무거운 컴포넌트라 로딩이 오래 걸리면 재랜더링마다 렉이 걸리기 때문에,\
그럴 땐 재랜더링을 특정 조건에만 실행하게 만드는 memo를 사용하면 좋다.\
특정 조건 : 자신의 props의 state가 변경될 때만 재랜더링\
테스트 기본 코드는 아래와 같다.
```javascript
function Child(){
  console.log('재렌더링됨')
  return <div>자식임</div>
}
function Cart(){ 
  let [count, setCount] = useState(0)
  return (
    <Child />
    <button onClick={()=>{ setCount(count+1) }}> + </button>
  )
}
```
이것을 memo로 활용 해보면 function의 형태가 조금 달라진다.
```javascript
import {memo, useState} from 'react'
let Child = memo( function(){
  console.log('재렌더링됨')
  return <div>자식임</div>
})
function Cart(){ 
  let [count, setCount] = useState(0)
  return (
    <Child />
    <button onClick={()=>{ setCount(count+1) }}> + </button>
  )
}
```

### memo쓸 때 주의할 점.
memo는 기존 props와 바뀐 props를 비교해서 바뀐 부분이 있는지 비교하는 연산이 있는데, props가 크고 복잡하면 이것도 렉걸림.\
막쓰지말고 정말 무거운 props인데 잘 안바뀌는 컴포넌트에 쓰면 좋을 듯.


### useMemo
useEffect와 비슷한 용도임. \
차이점이 있다면 실행되는 순서가 조금 다를뿐임.\
컴포넌트 로드할 때 1번만 실행하고 싶은 코드가 있으면 useMemo에 담으면 됨.\
테스트 코드는 아래와 같다.
```javascript
import {useMemo, useState} from 'react'
function 함수(){
  return 반복문10억번돌린결과
}
function Cart(){ 
  let result = useMemo(()=>{ return 함수() }, [])
  return (
    <Child />
    <button onClick={()=>{ setCount(count+1) }}> + </button>
  )
}
```

## 성능개선 3 : useTransition, useDeferredValue

### batch
state변경이 가까운 곳에서 동시다발적으로 일어나면\
다모아서 마지막에 재랜더링 해주는 기능\
ex : \
setCount(1) \
setName(2) \
setValue(3) //여기서 재랜더링 됨.\
batching 되는게 싫고 state변경함수 실행마다 재렌더링시키고 싶으면
flushSync라는 함수를 쓰면 됩니다.

### useTransition
임의로 지연시키는 코드다\
코드는 아래와 같다.
```javascript
import {useState} from 'react'
let a = new Array(10000).fill(0)
function App(){
  let [name, setName] = useState('')
  return (
    <div>
      <input onChange={ (e)=>{ setName(e.target.value) }}/>
      {
        a.map(()=>{
          return <div>{name}</div>
        })
      }
    </div>
  )
}
```


useTransition() 쓰면 그 자리에 [변수, 함수]가 남습니다. \
그 중 우측에 있는 startTransition() 함수로 state변경함수 같은걸 묶으면그걸 다른 코드들보다 나중에 처리해줍니다.\
실행코드는 아래와 같다.
```javascript
import {useState, useTransition} from 'react'
let a = new Array(10000).fill(0)
function App(){
  let [name, setName] = useState('')
  let [isPending, startTransition] = useTransition()
  return (
    <div>
      <input onChange={ (e)=>{ 
        startTransition(()=>{
          setName(e.target.value) 
        })
      }}/>

      {
        isPending ? "로딩중기다리셈" :
        a.map(()=>{
          return <div>{name}</div>
        })
      }
    </div>
  )
}
```
그래도 html이 많으면 여러 페이지로 쪼개서 지연시간을 단축시키자\
원인 근본을 해결하는 게 제일 나을 수도!

startTransition() 으로 감싼 코드가 처리중일 때 true로 변하는 변수입니다.

### useDeferredValue 
useTransition과 좀 다른 점은, useTransition은 지연시키는 state변경 함수를 감싸준다면 useDeferredValue()은 state 또는 변수를 넣는 것이다.\
코드는 아래와 같다.
```javascript
import {useState, useTransition, useDeferredValue} from 'react'
let a = new Array(10000).fill(0)
function App(){
  let [name, setName] = useState('')
  let state1 = useDeferredValue(name)
  return (
    <div>
      <input onChange={ (e)=>{ 
          setName(e.target.value) 
      }}/>
      {
        a.map(()=>{
          return <div>{state1}</div>
        })
      }
    </div>
  )
}
```
근데 기능은 같으니 편한거 알아서 쓰자구~

## PWA 셋팅해서 앱으로 발행하기 (모바일앱인척하기)
 https://elice.io/newsroom/pwa_2 기존 프로젝트에 pwa 추가
 