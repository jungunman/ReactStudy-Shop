import { useState } from 'react';
import './App.css';
import {Col, Row, Navbar, Container,Nav} from 'react-bootstrap';
import serverData from './data.js';
import { Routes, Route, Link, useNavigate ,Outlet} from 'react-router-dom';
import Detail from './pages/Detail';
import MainPage from './pages/Main';
import About from './pages/About';

function App() {

  let [data, setData] = useState(serverData);
  let navigate = useNavigate();
  return (
    <div className="App">

       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ReactStudy-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/detail")}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/about")}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={
          <MainPage data = {data} setData ={setData} />
        }/>
        <Route path='/detail/:id' element={
          <Detail data = {data}/>
        }/>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치임</div>} />
        </Route>
        <Route path='*' element={
          <div>없는 페이지입니다</div>
        }/>
      </Routes>
    </div>
  );
}





export default App;
