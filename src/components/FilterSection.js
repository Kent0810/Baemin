import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";
import {useParams} from 'react-router-dom';

import React, { useEffect, useState } from "react";

import { db } from "../Helpers/config";

import { getDoc, getDocs, query, doc, collection } from "firebase/firestore";


const FilterSection = () => {
  const {
    filters: { text, color, price, maxPrice, minPrice },
    category,
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const [products, setProducts] = useState([]);

  const urlId = useParams().itemId;

  let id;
  if(urlId === "comtam"){
    id = "Com Tam Tan Ky"
  }
  else if(urlId === "tea"){
    id = "Feelings_Tea"
  }
  else id="Wango"


  useEffect(() => {
    const getProducts = async () =>{
      const FoodRef= query(collection(db, "Restaurant_List", id,"Foods"));
      const DrinkRef = query(collection(db, "Restaurant_List", id,"Drinks"));
      const ExtraRef = query(collection(db, "Restaurant_List", id,"Extra"));

      const Foods = await getDocs(FoodRef);
      const Drinks = await getDocs(DrinkRef);
      const Extras = await getDocs(ExtraRef);

      const temp = []
      Foods.forEach((Food) => {
        temp.push(Food.data());
      });
      Drinks.forEach((Drink) => {
        temp.push(Drink.data());
      });
      Extras.forEach((Extra) => {
        temp.push(Extra.data());
      });
      setProducts(temp);
    }
    getProducts();
  },[])


  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(products, "category");


  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
            id={id}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                id={id}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter_price">
        <h3>Giá</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={0}
          max={100000}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Xóa Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
