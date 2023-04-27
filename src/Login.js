import Modal from "./components/Modal";
import styled from "styled-components";
const Login = () => {
    return(
        <Wrapper>
            <div>
                <Modal />
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    padding: 0 5rem;
`;
export default Login;