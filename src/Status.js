import styled from "styled-components";
import {GoVerified} from 'react-icons/go';
const Status = () => {
    window.scrollTo(0, 0);
    return (
        <Wrapper>
            <div className="status">
                <div className="status_text">
                    <div style={{color:"green"}}>Đặt Hàng Thành Công</div> 
                    <GoVerified size={38} color="Green"></GoVerified>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .status{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin-top: 20rem;
        margin-bottom: 20px;
        .status_text{
            justify-content: center;
            display: flex;
            align-items: center;
        }
        div{
            font-size: 48px;
            font-weight: 700;
            color: #333;
            margin-right: 10px;
        }
        p{
            margin-top: 20px;
            font-size: 20px;
            font-weight: 700;
            color: #333;
        }
    }

`

export default Status;