import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {changeAge, changeName,} from "./../store/userSlice.js";
import { upCount, deleteCart } from "../store.js";

function Cart(){
    const state = useSelector((state)=>{return state});
    const dispatch = useDispatch();
    return (
        <>
            <h4> {state.user.name}의 장바구니 </h4>
            <span>나이 : {state.user.age}</span>
            <button onClick={()=>{
                dispatch(changeAge(1));
            }}>한살 업!</button>
        <Table>
            <thead>
                <tr>
                <th> </th>
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
                        <td><button onClick={()=>{
                            dispatch(deleteCart(element.id));
                            console.log(state.cart);
                        }}>x</button></td>
                        <td>{i}</td>
                        <td>{element.name}</td>
                        <td>{element.count}</td>
                        <td><button onClick={()=>{
                            dispatch(upCount(element.id));
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
