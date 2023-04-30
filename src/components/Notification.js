import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import styled from "styled-components";
const Notification = () => {
    const {setNotification ,Notification} = useUserContext();
    const navigate = useNavigate();
    return (
        <Wrapper>
            <div className={"notification"}>
                <div className={"notification__content"}>
                    <h2 className={"notification__content__header"}>{Notification.type} !</h2>
                    <p className={"notification__content__message"}>{Notification.message}</p>
                    
                    <button className={"notification__content__btn"} onClick={()=>{
                        setNotification("OFF","OFF")
                        setTimeout(()=>{
                            navigate("/");
                        },200)
                    }}>Got It !</button>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    .notification{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: all 0.3s ease-in-out;
}
.notification__content{
    position: relative;
    width: 400px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    text-align: center;
}
.notification__content__header{
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
}
.notification__content__message{
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 20px;
}
.notification__content__btn{
    padding: 10px 20px;
    border: none;
    background-color: #f50057;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
`;
export default Notification