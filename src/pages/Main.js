import {Row, Container} from 'react-bootstrap';
import Card from '../components/Card.js';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function MainPage(props){
  let [moreBtn,setMoreBtn] = useState(true);
  let [loading,setLoading] = useState(false);

    return(
      <>
              <div className='main-bg'></div>
              <div className='bg__color'>
              <button onClick={()=>{
                let copyData = JSON.parse(JSON.stringify(props.data));
                //객체 배열 정렬하기.
                copyData = copyData.sort((front,back)=>{
                  if(front.title > back.title) return 1;
                  if(front.title < back.title) return -1;
                  return 0;
                });
                props.setData(copyData);
              }} className="btn btn-danger">정렬</button> 
              <Container>
                <Row>
                  {props.data.map((element,i)=>{
                    return(
                      <Link key={element.id}  className='col-md-4' to={`/detail/${element.id}`} style={{textDecoration :'none', color : "grey"}}>
                        <Card data = {element} i={i} />
                      </Link>
                      )
                  })
                  }
                </Row>
              </Container>
              {
                loading === true ? <Loading/> : null
              }
              {
                moreBtn === true ? 
                <button onClick={()=>{
                  setLoading(true);
                  axios.get(`https://codingapple1.github.io/shop/data${props.moreCount+2}.json`)
                  .then((result)=>{
                    const copyData = [...props.data, ...result.data];
                    props.setMoreCount(props.moreCount+1)
                    props.setData(copyData);
                    setLoading(false);
                  })
                  .catch(()=>{
                    console.log(loading);
                    setMoreBtn(false);
                    setLoading(false);
                  });
                }}>더 보기</button>:
                <NotMore/>
              }
              </div>
            </>
    )
  }

  function Loading(){
    return (
    <>
    <div className='alert alert-warning'>로딩중...!</div>
    </>
    )
  }
  function NotMore(){
    return (
    <>
      <div className='alert alert-warning'>더 이상 상품이 없습니다.</div>
      <button disabled> 더 보기 </button>
    </>
    )
  }

  export default MainPage;