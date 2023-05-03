import { createContext, useContext, useReducer,useState, useEffect } from "react";

import reducer from '../reducer/orderReducer'
const orderContext = createContext();

const initialState = {
    order: [],
    total: 0,
    amount: 0,
    shippingFee: 0,
}

const OrderProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const Checkout = (order)=>{
       
        dispatch({type:"CHECKOUT", payload: order})
    }

    return (
        <orderContext.Provider value={{...state, Checkout}}>
            {children}
        </orderContext.Provider>
    )
}

const useOrderContext = ()=>{
    return useContext(orderContext);
}

export {OrderProvider, useOrderContext}