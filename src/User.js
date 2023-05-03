import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { auth } from "./Helpers/config";
import userAvatar from '../src/assests/user.jpg'
import OrderStatus from "./components/OrderStatus";
import { useState } from "react";
import OrderHistory from "./components/OrderHistory";
const User = () => {
    const [isOrderStatus, setIsOrderStatus] = useState(false);
    const [isOrderHistory, setIsOrderHistory] = useState(false);
    return (
        <Wrapper>
            <div className="user_info">
                <div className="user_info_avatar">
                    <img src={userAvatar} alt="my logo img" className="logo" />

                </div>
                <div className="user_info_name">
                    {auth?.currentUser?.email}
                </div>
                
            </div>
            <div className="order_container">
                <div className="order_content">
                    <div className="order_content_header">
                        <div onClick={()=>{
                            setIsOrderStatus(!isOrderStatus) 
                            setIsOrderHistory(false)
                            }}>Orders Status</div>
                        <div onClick={()=>{
                            setIsOrderHistory(!isOrderHistory)
                            setIsOrderStatus(false)
                        }}>Orders History</div>
                        <NavLink to='/user/profile' className="third_btn">Profile</NavLink>
                    </div>
                </div>
            </div>
            {isOrderStatus   && <OrderStatus/>}
            {isOrderHistory  && <OrderHistory/>}
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    .user_info{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 300px;
        justify-content: center;
        .user_info_name{
            margin-top: 20px;
            font-size: 3rem;
        }
        .user_info_avatar{
            img{
                width: 150px;
                height: 150px;
                border-radius: 50%;
            }
        }
    }
.order_container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .order_content{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .order_content_header{
            width: 100%;
            
            display: flex;
            justify-content: space-evenly;
            div,
            .third_btn{
                width: 100%;
                height: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 2rem;
                font-weight: bold;
                text-transform: uppercase;
                border: 1px solid black;
                border-radius: 5px;
                cursor: pointer;
                color: black;
                
                color: white;
                background-color: rgb(98 84 243);
                transition: all 0.1s ease-in-out;
                &:hover{
                    color: rgb(98 84 243);
                    background-color: white;
                    scale: 1.02;
                }
                &:active{
                    color: rgb(98 84 243);
                    background-color: white;
                    scale: 1.02;
                }
            }
        }
    }
}
    h1{
        text-align: center;
    }

`
export default User;