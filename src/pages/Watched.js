import { Table } from "react-bootstrap";

function Watched (){
    const watched = JSON.parse(localStorage.getItem("watched"));
    return(
<>
    <Table>
        <thead>
            <tr>
                <th>상품번호</th>
                <th>상품명</th>
                <th>금액</th>
            </tr>
        </thead>
            {
            watched !=null ?
            watched.map((element, i)=>{
                return(
                <tbody key={i}>
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.price}</td>
                    </tr>
                </tbody>    
                );
            })
            :<tbody>
                <tr>
                    <td></td>
                    <td>최근 본 상품이 없습니다.</td>
                    <td></td>
                </tr>
             </tbody> 
            }
    </Table> 
</>
    );
}

export default Watched;