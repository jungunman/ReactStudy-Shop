import {Row, Container} from 'react-bootstrap';
import Card from '../components/Card.js';
import {Link} from 'react-router-dom';

function MainPage(props){
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
                      <Link to={`/detail/${element.id}`} style={{textDecoration :'none', color : "grey"}}>
                        <Card key={element.id} data = {element} i={i} />
                      </Link>
                      )
                  })
                  }
                </Row>
              </Container>
              </div>
            </>
    )
  }


  export default MainPage;