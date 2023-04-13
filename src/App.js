import './App.css';
import {Col, Row, Navbar, Container,Nav} from 'react-bootstrap';

import product1 from "./img/product1.jpg"
import product2 from "./img/product2.jpg"
import product3 from "./img/product3.png"
//부트스트랩 import방법
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ReactStudy-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>

      <div className='bg__color'>
      <Container>
        <Row>
          <Col md={4}>
            <img className='main-products' src= {product1}/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img className='main-products' src={product2}/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img className='main-products' src={product3}/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
      </div>


    </div>
  );
}

export default App;
