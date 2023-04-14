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
Import해서 자료를 가져오면 됩니다.\

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

App.js 파일로 돌아와서\
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
Hook임 => 유용한 것들을 모아둔 함수.\
```
let navigate = useNavigate();
```

