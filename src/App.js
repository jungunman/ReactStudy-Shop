import { lazy, Suspense , useEffect, useState } from 'react';
import './App.css';
import {Col, Row, Navbar, Container,Nav} from 'react-bootstrap';
import serverData from './data.js';
import { Routes, Route, Link, useNavigate ,Outlet} from 'react-router-dom';
import MainPage from './pages/Main';
import axios from 'axios';
import Watched from './pages/Watched.js';
import { useQuery } from 'react-query';


const Detail = lazy(()=>import('./pages/Detail.js'));
const Cart = lazy(()=>import('./pages/Cart.js'));
const About = lazy(()=>import('./pages/About.js'));


function App() {

  let [data, setData] = useState(serverData);
  let [moreCount,setMoreCount] = useState(0);
  let navigate = useNavigate();
  
  let result = useQuery("user", async() =>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((e)=>{
      console.log("ajax 요청됨.")
      return e.data
    }),//endThen
    {staleTime : 2000}
  });//endQuery


  return (
    <div className="App">

       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ReactStudy-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/detail")}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/about")}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/cart")}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/watched")}}>Watched</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
          { result.isLoading && '로딩중' }
          { result.error && '에러남' }
          { result.data && result.data.name }
          </Nav>
        </Container>
      </Navbar>
      <Suspense fallback={<div>로딩중입니다.</div>}>
        <Routes>
          <Route path='/' element={
            <MainPage data = {data} setData ={setData}
            moreCount = {moreCount} setMoreCount = {setMoreCount}/>
          }/>
          <Route path='/detail/:id' element={
            <Suspense fallback={<div>로딩중입니다.</div>}>
              <Detail data = {data}/>
            </Suspense>
          }/>
          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버임</div>} />
            <Route path="location" element={<div>위치임</div>} />
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/watched" element={<Watched/>}/>
          <Route path='*' element={
            <div>없는 페이지입니다</div>
          }/>
        </Routes>
      </Suspense>
    </div>
  );
}





export default App;
