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


