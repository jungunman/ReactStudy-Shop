# React로 쇼핑몰 만들기

## Bootstrap 다운
터미널창에 입력
```
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
```
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
```
import 변수명 from "이미지 경로"
<div className='main-bg' style={{backgroundImage : `url(${변수명})`}}></div>
```
이렇게 사용하면 된다.

## 이미지 크기 조절
```
<img width="90%" height="80%" src= {product1}/>
```
이렇게 가능함.\
object-fit이 안되기에 css가 더 깔끔하고 이쁨.

## public 폴더 사용법
리액트는 사이트 발행전에 html,js,css를 압축하게 된다.(building)\
public 폴더 안에 있는 것을 경로 가져올 때는 
```
<img src="/이미지 경로" />
```
처럼 가지고 와도 되서 편함!\
만약 사이트 경로가 많아질 경우 아래 코드를 이용하면 됨.
```
<img src={process.env.PUBLIC_URL+"/이미지 경로"} />
```

## Import, Export 
데이터 및 자료가 많으면 다른 파일을 만들고 Export 하고,\
Import해서 자료를 가져오면 됩니다.

### 하나의 자료를 내보낼 땐 export default 변수명 형식으로 내보내면 됩니다.
```
const serverData = [{
  자료이름1 :자료1
  자료이름2 :자료2
}]

export default serverData;
```

### 하나의 자료를 받을 땐 받을 js 파일에서 아래 코드를 작성합니다.
```
import 변수명 from '받을 데이터 경로';
```

### 여러 개의 자료를 내보내는 방법
```
const 변수명1 = 1;
const 변수명2 = 2;

export {변수명1,변수명2};
```

### 여러 개의 자료를 받을 땐 받을 js 파일에서 아래 코드를 작성합니다
```
import {변수명1,변수명2} from '받을 데이터 경로'
```
<strong>주의할 점</strong>\
Export할 때의 변수명과 Import할 때의 변수명이 다르면 안됩니다.


## 리액트 라우터 셋팅이랑 기본 라우팅
react-router-dom 라이브러리를 쓰면 if문 떡칠 안해도 됩니다.\
6버전 설치함.
```
npm install react-router-dom@6
```

그다음 /src/index.js 파일 열고
```
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
```
import { BrowserRouter } from 'react-router-dom';
```

App.js 파일로 돌아와서
```
import { Routes, Route, Link} from 'react-router-dom'
```
임포트는 라우츠와 라우트 링크를 react-router-dom로부터 Import 해주면 사용 준비끝!

### 사용하는 방법은?
```
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
```
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
```
let navigate = useNavigate();
```
이렇게 변수로 만들어주고 사용하면 됨.
```
<button onClick={()=>{navigate("경로")}}>Navigate 사용법</button>
```
이렇게 사용하는 이유는 Link 컴포터트를 사용했을 때 안 이쁘기 때문에!\
사용법 숙달 이슈가 있을수도 있음.


## nested routes / outlet 사용법
nested routes 는 route를 만들 때 경로가 비슷한 것들을 모아두는 곳이라고 생각하면 됩니다.\
사용법은 아래와 같습니다.
```
<Route path="/상위경로" element={<div>HTML 코드1</div>}>
          <Route path="하위경로1" element={<div>HTML 코드1</div>} />
          <Route path="하위경로2" element={<div>HTML 코드2</div>} />
        </Route>
```
HTML코드1을 누르게 되면 url에서는 이렇게 보인다.\
도메인.com/상위경로/하위경로1

outlet은 하위 경로로 진입하면 보일 css를 어디다가 보여줄 것인지 위치를 정해주는 것이다.
```
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
```
<Route path='/detail/:파라미터' element={<div>HTML 코드</div>}/>
```
이렇게 파라미터를 꽃아 넣을 수 있고 여러 파라미터도 넣을 수 있다.\
react-router-dom 라이브러리를 설치해야 한다.\
가져오는 방법은 아래와 같다.
```
import { useParams } from 'react-router-dom';

//함수 내에 선언
const {파라미터 이름} = useParams();

<h4>파라미터 이름의 값 : {파라미터 이름}</h4>
```

## styled-components를 사용하여 CSS 적용하기
라이브러리 설치 먼저
```
npm install styled-components
```
그 후 사용법
```
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
```
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
```
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
```
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
```
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
```
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
```
npm install axios
```

사용방법은 아래와 같다. import 필수!
```
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
```
fetch('get요청할 url').then((결과)=>{결과.json}).then((data) => {})
```
기본 골자는 이런 느낌?\
딱봐도 복잡하다. 그냥 axios 쓰자.

## get요청을 여러개 하고 싶을 땐 Promise.all([])
두 개의 get 요청의 데이터를 모두 가져왔을 때 실행시켜준다.\
사용방법은 아래와 같다.
```
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
```
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
```
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
```
npm install @reduxjs/toolkit react-redux
```

### 리덕트 쓰기 위해서 할 셋팅!
1. src 하위에 store.js를 만든다\
그리고 아래 코드를 붙여 넣는다.
```
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { }
}) 
```
2. 그리고 index.js 가서 <Provider store={store}>로 감싼다.\
모습은 아래와 같다.
```
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
```
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
```
const state = useSelector((state)=>{return state});
```
useSelector((state)=>{return state})는 아래처럼 생략 가능하다.
```
const state = useSelector((state)=> state );
console.log(state.user);

//값 : 김희성
```
모든 데이터를 redux에 넣을 필요는 없고,\
자주 쓰이는 state가 아니라 해당 페이지에서만 쓰는 state라면\
그냥 useState()쓰자...

### redux state 변경하는 법
아래 코드의 reducers를 주목하라!
```
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
```
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


