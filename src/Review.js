import styled from "styled-components";
import { Button } from "./styles/Button";
import { useNavigate } from "react-router-dom";
import {BiStar} from "react-icons/bi"

const Review =()=>{
    const navigate = useNavigate()
    return(
        <Wrapper>
            <div className="review">
                <h1>Review</h1>
                <div className="star_container">
                    <BiStar size={40} style={{cursor:"pointer"}}></BiStar>
                    <BiStar size={40} style={{cursor:"pointer"}}></BiStar>
                    <BiStar size={40} style={{cursor:"pointer"}}></BiStar>
                    <BiStar size={40} style={{cursor:"pointer"}}></BiStar>
                    <BiStar size={40} style={{cursor:"pointer"}}></BiStar>
                </div>
                <div className="text_area">
                    <p>Đánh giá của bạn</p>
                    <textarea></textarea>
                    <Button onClick={()=>{
                        alert("Gửi Thành Công")
                        navigate("/")
                }}>Gửi</Button>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

    width:70%;
    margin-top: 5rem;
    padding: 9rem 10rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    //center this
    margin-left: auto;
    margin-right: auto;

    border-radius: 10px;
    .star_container{
        margin-top:-4rem;
        margin-bottom: 4rem;
        display: flex;
    }
    .review{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
            font-size: 3rem;
            margin-top:-5rem;
            margin-bottom: 5rem;
        }
        p{
            font-size: 1.8rem;
            font-weight: 500;
        }
        textarea{
            width: 500px;
            height: 200px;
            border-radius: 10px;
            border: 1px solid #000;
            font-size: 1.8rem;
            font-weight: 500;
            padding: 1rem;
            margin-top: 1rem;
        }
        .text_area{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            button{
                padding: 1rem 5rem;
                margin-top: 4rem;
            }
        }
    }
    
`
export default Review;