import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducer/productReducer";

import { db } from "../Helpers/config";

import {doc, getDoc} from "firebase/firestore";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider =  ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    const products = [];

    const comtam = doc(db,"Restaurant_List","Com Tam Tan Ky"); 
    const tea = doc(db,"Restaurant_List","Feelings_Tea");
    const wango = doc(db,"Restaurant_List","Wango");

    const comtamSnapShot = await getDoc(comtam);
    const teaSnapShot = await getDoc(tea);
    const wangoSnapShot = await getDoc(wango);

    

    products.push(comtamSnapShot.data(),teaSnapShot.data(),wangoSnapShot.data());
  
  
    dispatch({ type: "SET_LOADING" });
    try {
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const comtam = doc(db,"Restaurant_List","Com Tam Tan Ky");
      const singleProduct = await getDoc(comtam);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
