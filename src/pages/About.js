import {Outlet, useNavigate} from 'react-router-dom';
function About(props){
    const navigate = useNavigate();
    return (
    <>
        <div>회사 정보 페이지</div>
        <button onClick={()=>{navigate("/about/member")}} className="btn btn-danger">멤버</button>
        <button onClick={()=>{navigate("/about/location")}}className="btn btn-danger">회사위치</button>
        <Outlet></Outlet>
    </>
    );
}

export default About;