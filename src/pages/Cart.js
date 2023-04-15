import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {changeName} from "./../store.js";

function Cart(){
    const state = useSelector((state)=>{return state});
    const dispatch = useDispatch();
    return (
        <>
            {state.user}의 장바구니
        <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {state.cart.map((element, i)=>{
                    return(
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{element.name}</td>
                        <td>{element.count}</td>
                        <td><button onClick={()=>{
                            dispatch(changeName());
                        }}>+</button></td>
                    </tr>
                    )
                })

                }
            </tbody>
        </Table> 
        </>
    )
}

export default Cart;
