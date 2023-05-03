const orderReducer = (state , action) => {
    if(action.type === "CHECKOUT"){
        //const newArray = state.order.concat(action.payload)
        return {...state, order:action.payload}
    }
    return state;
}

export default orderReducer;



