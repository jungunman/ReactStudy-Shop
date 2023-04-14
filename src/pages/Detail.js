import {Col, Row, Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props){
    const {id} = useParams();
    console.log(id);
    return (
      <>
        <Container>
          <Row>
            <Col md={6}>
              <img src={process.env.PUBLIC_URL+props.data[props.data[id].id].src} width="100%" />
            </Col>
            <Col md={6}>
              <h4 className="pt-5">{props.data[props.data[id].id].title}</h4>
              <p>{props.data[props.data[id].id].content}</p>
              <p>{props.data[props.data[id].id].price}원</p>
              <button className="btn btn-danger">주문하기</button> 
            </Col>
          </Row>
        </Container>
      </>
    )
  }


  export default Detail;