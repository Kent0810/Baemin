import ReactDOM from "react-dom";
import React from 'react';
import styled from "styled-components";

const Backdrop = () => {
    return (
        <BackdropWrapper>
            <div className="backdrop"></div>
        </BackdropWrapper>
    )
}


const Loading = () => {
    return (
        <LoadingWrapper>
            <div className={"loading__container"}>
                <div className={"loading"}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </LoadingWrapper>
    )
}

const LoadingModal = () => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Loading />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

const BackdropWrapper = styled.div`
    .backdrop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: rgba(0, 0, 0, 0.75);
    }
`;

const LoadingWrapper = styled.div`
    .loading__container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading {
        --bg-image: var(--body-image);
        --animation-time: 3s;
        --dot-size: 20px;
        --dots-length: calc(7 * var(--dot-size));
        --loading-width: 100vw;
        width: var(--loading-width);
        height: var(--dot-size);

        display: flex;
        position: relative;

        overflow: hidden;


    }

    .loading::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background: linear-gradient(to right, var(--bg-image), transparent 10% 90%, var(--bg-image));
    }

    .loading>span {
        display: inline-block;
        position: absolute;

        background: #aaa;
        width: var(--dot-size);
        height: var(--dot-size);
        border-radius: 50%;

        --initial-left: 0px;
    }

    .loading>span:nth-child(1) {
        --initial-left: 0px;
        --animation-delay: calc(4/10 * var(--animation-time));
    }

    .loading>span:nth-child(2) {
        --initial-left: calc(1.5 * var(--dot-size));
        --animation-delay: calc(3/10 * var(--animation-time));
    }

    .loading>span:nth-child(3) {
        --initial-left: calc(3 * var(--dot-size));
        --animation-delay: calc(2/10 * var(--animation-time));
    }

    .loading>span:nth-child(4) {
        --initial-left: calc(4.5 * var(--dot-size));
        --animation-delay: calc(1/10 * var(--animation-time));
    }

    .loading>span:nth-child(5) {
        --initial-left: calc(6 * var(--dot-size));
        --animation-delay: calc(0/10 * var(--animation-time));
    }

    .loading>span {
        animation: move var(--animation-time) cubic-bezier(0.3, 1, 0.5, 0) infinite;
        animation-delay: var(--animation-delay);

        left: calc(var(--initial-left) - var(--dots-length));
    }

    @keyframes move {

        50%,
        100% {
            left: calc(100% + var(--initial-left));
        }
    }

`;
export default LoadingModal