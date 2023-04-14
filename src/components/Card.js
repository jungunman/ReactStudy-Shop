import {Col} from 'react-bootstrap';
function Card(props){
    return (
      <Col md={4}>
        <img className='main-products' alt='' src= {process.env.PUBLIC_URL+props.data.src}/>
        <h4 className='title'>{props.data.title}</h4>
        <p>{props.data.price}</p>
        <p>{props.data.content}</p>
      </Col>
    )
  }


  export default Card;