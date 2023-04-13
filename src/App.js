import './App.css';
import {Col, Row, Navbar, Container,Nav} from 'react-bootstrap';
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
            <img className='main-products' alt='' src= {process.env.PUBLIC_URL+"/img/product1.jpg"}/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img className='main-products' alt='' src= {process.env.PUBLIC_URL+"/img/product2.jpg"}/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img className='main-products' alt='' src= {process.env.PUBLIC_URL+"/img/product3.png"}/>
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
