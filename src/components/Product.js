import React from "react";


import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

import { useEffect,useState } from "react";

import {
  ref,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../Helpers/config";
const Product = (curElem) => {

  const { id, name, img, price, category } = curElem;

  const [imageUrls, setImageUrls] = useState([]);
  const imagesRef = ref(storage, `Images/${id}/Logo.jpg`);


  useEffect(() => {
    getDownloadURL(imagesRef)
    .then((url) => {
      setImageUrls((prev) => [...prev, url]);
    })
  },[])


  const product = {
    id: id,
    name: name,
    img:img,
    price: price,
    category:category,
  };

  
  return (
    <NavLink to={category==='others'?`singleproduct/${name}`:`/products/${id}`} state={product}>
      <div style={{padding:"1rem"}} className="card" >
        <figure >
            {imageUrls.map((url) => {
              return <img style={{
                objectFit:"contain",
              }} src={url}/>;
            })}
          <figcaption className="caption">{category==='others'? <FormatPrice price={price}></FormatPrice>:category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
