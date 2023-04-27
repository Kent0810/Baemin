import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer";

import { useParams } from "react-router-dom";

import { useState } from "react";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  id: "",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};


export const FilterContextProvider = ({ children }) => {

  const { products, id } = useProductContext();

  const [category, setCategory] = useState("all");

  const [value, setValue] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {

    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // to set the list view
  const setListView = () => {
    // return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  // const sorting = (event) => {
  //   let userValue = event.target.value;
  //   dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  // };

  // // update the filter values
  const updateFilterValue = (event) => {
    let id = event.target.id
    let name = event.target.name;
    let value = event.target.value;

    if (name === "category"){
      setCategory(value);
    }
    else if (name === "price"){
      setValue(value);
    }
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value, id } });
  };

  // // to clear the filter
  // const clearFilters = () => {
  //   dispatch({ type: "CLEAR_FILTERS" });
  // };

  // // to sort the product
  // useEffect(() => {
  //   dispatch({ type: "FILTER_PRODUCTS" });
  //   dispatch({ type: "SORTING_PRODUCTS" });
  // }, [products, state.sorting_value, state.filters]);

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        category,
        value,
        setGridView,
        setListView,
        // sorting,
        updateFilterValue,
        // clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
