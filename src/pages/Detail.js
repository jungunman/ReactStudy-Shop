import { useEffect, useState } from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import { json, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../store.js';

let ColorwBtn = styled.button`
  //styled-components 라이브러리의 문법임 ex) props => props.bg
  background :${ props => props.bg};
  // 삼항 연산자로 CSS 내에서 조건문 만들 수도 있음.
  color : ${props => props.bg === "blue" ? "white" : "black"};
  padding : 10px;
`



function Detail(props){
  //Redux-States
  const cart = useSelector((state)=>{return state.cart});
  const dispatch = useDispatch();

  //useStates
  const [display,setDisplay] = useState(true);
  const [alert,setAlert] = useState(false);
  const [text,setText] = useState("");
  const [tabs,setTabs] = useState(0);
  const [fade2, setFade2] = useState('');


  useEffect(()=>{ 
    let timer = [setTimeout(()=>{
      setDisplay(false);
    },1000 * 2),
    setTimeout(()=>{
      setFade2('end')
    },100)
  ]
    
    setFade2('end')
    return (()=>{
      setFade2('');
      clearTimeout(timer);
    })
  }, []);

    const {id} = useParams();
    return (
      <>
        <Container className={`start ${fade2}`}>
          {
            display === true ? <div className='alert alert-warning' >
                                2초 이내 구매 시 할인
                              </div> : null
          }
          <Row>
            <Col md={6}>
              <img src={process.env.PUBLIC_URL+props.data[props.data[id].id].src} width="100%" />
            </Col>
            <Col md={6}>
              <form>
                {
                  alert === true ? <div className='alert alert-warning' > 숫자만 입력하세요!</div> :null
                }
                
                <input type='text' minLength={1} onChange={(e)=>{
                  //인풋태그에 숫자만 넣게하는 정규식
                  const regex = /^[0-9]+$/;
                  if (regex.test(e.target.value)){
                    setText(e.target.value);
                    setAlert(false);
                  }else{
                    e.target.value = text;
                    setAlert(true);
                  }
                }}/>
              </form>
              <h4 className="pt-5">{props.data[props.data[id].id].title}</h4>
              <p>{props.data[props.data[id].id].content}</p>
              <p>{props.data[props.data[id].id].price}원</p>
              <button className="btn btn-danger" onClick={()=>{
                dispatch(addCart({id:props.data[props.data[id].id].id , name:props.data[props.data[id].id].title, count:props.data[props.data[id].id].count}));
                console.log(cart);
              }}>주문하기</button> 
            </Col>
          </Row>
        </Container>
        <Nav className={`start ${fade2}`} variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link eventKey="link0" onClick={()=>{ setTabs(0)}}>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link1" onClick={()=>{ setTabs(1)}}>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link2" onClick={()=>{ setTabs(2)}}>버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        <TabContents tabs = {tabs} data={props.data} id={id}/>

      </>
    )
  }

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
    {[<div>{props.data[props.id].title}</div>,<div>내용1</div>,<div>내용2</div>][props.tabs]}
   </div>
    )
  }

  export default Detail;