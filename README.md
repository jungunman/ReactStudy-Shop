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