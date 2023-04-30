
const userReducer = (state,action) => {
    if(action.type === "LOADING"){
        return {...state, isLoading:!state.isLoading}
    }
    if(action.type === "SET_USER"){
        return {...state, user:action.payload, isSignIn:true}
    }
    if(action.type === "SET_NOTIFICATION"){
        return {...state, isNotification:!state.isNotification, Notification:action.payload}
    }
    return state;
}

export default userReducer;