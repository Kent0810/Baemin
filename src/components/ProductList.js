import React, { useEffect, useState } from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

import { db } from "../Helpers/config";

import { getDoc, getDocs, query, doc, collection } from "firebase/firestore";

const ProductList = (props) => {
  const { filter_products, grid_view } = useFilterContext();

  const [products, setProducts] = useState([]);

  let id;
  if(props.itemId === "comtam"){
    id = "Com Tam Tan Ky"
  }
  else if(props.itemId === "tea"){
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

  if (grid_view === true) {
    return <GridView products={products} id={props.itemId} brandId = {id}/>;
  }

  if (grid_view === false) {

    return <ListView products={products} />;
  }
};

export default ProductList;
