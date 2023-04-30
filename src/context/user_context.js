import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducer/userReducer'

import { auth } from "../Helpers/config";
import { signInWithEmailAndPassword } from "firebase/auth";



const userContext = createContext();

const initialState = {
    user: null,
    isSignIn: false,
    isLoading: false,
    isNotification: false,
    Notification: {message:"", type:""}
}

const UserProvider = ({children})=>{


    const [state, dispatch] = useReducer(reducer, initialState);

    const setUserSignIn = (email, password)=>{      
        async function signIn(){
            dispatch({type:"LOADING"})
            try{
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                dispatch({type:"SET_USER", payload:user})
                dispatch({type:"LOADING"})
                setNotification("You can close this box now", "Login Successfully")


            }catch(err){
                const error = "Error: " + err.message.slice(err.message.indexOf("/") + 1, err.message.indexOf(")")).toUpperCase().replace(/-/g, ' ')//regex expression
                alert(error);
                dispatch({type:"LOADING"})

            }
        }
        signIn();
    }


    const setNotification = (message, type)=>{
        dispatch({type:"SET_NOTIFICATION", payload:{message, type}})
    }
    return (
        <userContext.Provider value={{...state, setUserSignIn, setNotification}}>
            {children}
        </userContext.Provider>
    )
}


const useUserContext = ()=>{
    return useContext(userContext);
}

export {UserProvider, useUserContext}
