import styled from "styled-components";
import React, {useState} from "react";
import { Button } from "../styles/Button";


const Modal = ()=>{
    const [isSignUp, setIsSignUp] = useState(false);

    const signUpClicked = ()=>{        
        setIsSignUp(true);
    }

    const signInClicked = () => {
        setIsSignUp(false);
    }

    const submitHandler = (e) =>{
        e.preventDefault();

    }

    return (
        <Wrapper className="modal-container">
            <div className="modal">
                <header>
                    <p onClick={signInClicked} style={
                        {
                            backgroundColor: !isSignUp ? "rgb(98 84 243)" : "rgb(255 255 255)",
                            color: !isSignUp ? "rgb(255 255 255)" : "rgb(98 84 243)",
                        }
                    } className="left">Sign In</p>
                    <p onClick={signUpClicked} style={
                        {
                            backgroundColor: isSignUp ? "rgb(98 84 243)" : "rgb(255 255 255)",
                            color: isSignUp ? "rgb(255 255 255)" : "rgb(98 84 243)",
                        }
                    } className="right">Sign Up</p>
                </header>
                { !isSignUp &&
                    <form className="modal-content" onSubmit={submitHandler}>
                        <p>Login</p>
                        <input type="input" placeholder="Username..."></input>
                        <input type="password" placeholder="Password..."></input>
                        <a>Forget your password?</a>
                        <div className="modal-content-footer">
                            <Button type="submit"> Sign In </Button>
                        </div>
                    </form>
                }
                { isSignUp &&
                    <form className="modal-content" >
                        <p>Sign Up</p>
                        <input type="input" placeholder="Fullname..."></input>
                        <input type="input" placeholder="Username..."></input>
                        <input type="email" placeholder="Email..."></input>
                        <input type="password" placeholder="Password..."></input>
                        <input type="password" placeholder="Confirmed Password..."></input>
                        <input type="date" placeholder="Date of Birth..."></input>
                        <div className="modal-content-footer">
                            <Button > Sign Up </Button>
                        </div>
                    </form>
                }
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
    padding: 10rem 0;
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    
    .modal{
        width: 40rem;
        height: 50%;
        background-color: #fff;
        border-radius: 1rem;
        box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
        display:flex;
        flex-direction: column;
        align-items: center;
        p{
            font-size: 2rem;
            font-weight: 700;
        }
        header{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 2rem;
            text-align: center;
            background-color: transparent;
            .left{
                padding: 1rem 2rem;
                height: 100%;
                width: 100%;
                background-color: rgb(98 84 243);
                color: rgb(255 255 255);
                border-radius: 1rem;
                border-bottom: 8px solid #183153;
                &:active{
                    border-bottom: 3px solid #183153;
                }
                
            }
            
            .right{
                padding: 1rem 2rem;
                height: 100%;
                width: 100%;
                background-color: rgb(255 255 255);
                box-shadow: 0 0 0.5rem 0 rgba(0,0,0,0.2);
                color: rgb(98 84 243);
                border-radius: 1rem;
                border-bottom: 8px solid #183153;
                &:active{
                    border-bottom: 3px solid #183153;
                }
            }

            cursor: pointer;
        }
    }

    .modal-content{
        width: 90%;
        height: 100%;
        display: flex;
        padding: 2rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        a{
            width: 100%;
            font-size: 1.4rem;
            text-align: left;
            font-weight: 500;
            color: rgb(98 84 243);
        }
        input{
            width: 100%;
            margin: 1rem 0;
        }

        &-footer{
            margin-top: 2rem;
            width: 100%;
            display: flex;
            align-items: center;
            button{
              
                flex-grow: 1;
            }
        }
    }
`;
export default Modal;

