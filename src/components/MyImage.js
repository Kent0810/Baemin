import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ img: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <Wrapper>
      <div className="main-screen">
        <img src={imgs[0]} alt={mainImage?.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  width: 100%;
  height: 100%;

  /* .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    background-color: black;
    width: 100%;
    gap: 1rem;
    order: 2; */

  img {
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
  

  .main-screen {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    order: 1;

    img {
      max-width:100%;
      width : 80%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
