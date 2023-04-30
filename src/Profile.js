import {auth} from './Helpers/config';
import {signOut} from 'firebase/auth';
import styled from 'styled-components';
import {Button} from './styles/Button';

import { useNavigate } from 'react-router-dom';
import { useEffect,useRef,useState } from 'react';

import { doc, getDoc,setDoc } from "firebase/firestore";
import { db } from './Helpers/config';
import userAvatar from '../src/assests/user.jpg'
const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const phoneRef = useRef();
    const addressRef = useRef();
    const birthdayRef = useRef();
    useEffect(()=>{
        const getData = async () =>{
            try{
                if(!auth.currentUser) return
                const userRef = doc(db, 'USERS_INFO', auth.currentUser.uid);
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    setUser(docSnap.data())
                }
                else{
                    alert('ERROR!')
                }
            }
            catch(err){
                alert(err)
            }
        }
        getData()
    },[])
    const updateData = async () =>{
        try{
            if(!auth.currentUser) return
            const userRef = doc(db, 'USERS_INFO', auth.currentUser.uid);
            await setDoc(userRef, {phone: phoneRef.current.value},{merge:true});
            alert('Updated!')
        }
        catch(err){
            alert(err)
        }
    }
    return(
        <Wrapper>
            <h1>Profile</h1>
            
            <div className='profile-info'>
                <div className="user_info_avatar">
                    <img src={userAvatar} alt="my logo img" className="logo" />

                </div>
                <form className='profile-form'>
                    <input type='email' placeholder='Email'  value={user?.email}></input>
                    <input type='text' placeholder='Phone' ref={phoneRef} defaultValue={user?.phone}></input>
                    <input type='text' placeholder='Address'ref={addressRef} defaultValue={user?.address}></input>
                    <input type='date' placeholder='Birthday'ref={birthdayRef} defaultValue={user?.birthday}></input>
                </form>
                <div className='profile-form-footer'>
                    <Button className='small_btn' onClick={()=>{navigate('/user')}}>Cancel</Button>
                    <Button className='small_btn' onClick={updateData}>Update</Button>
                </div>
                <div className={"divider"}></div>
                <Button className='btn' onClick={() => {
                    signOut(auth) 
                    if(auth.currentUser !== null) navigate('/')
                }}>Sign Out</Button>
            </div>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 0 15px;
    h1{
        font-size: 3rem;
        margin: 2rem 0;
        font-weight: 800;
    }
    .user_info_avatar{
        img{
            margin-top: 2rem;
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
    }
    .btn{
        margin-bottom: 1.5rem;
        padding: 1rem 2rem;
    }
    h1 {
        font-size: 3rem;
        margin: 2rem 0;
    }
    .profile-form-footer{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .profile-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 600px;
        max-width: 400px;
        margin: 0 auto;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 0 2rem;
    }
    .small_btn{ 
        padding: 0.8rem 3rem;
        border-radius: 25px;
        font-size: 1.4rem;
        background-color: white;
        color: rgb(98 84 243);
        border: 1px solid rgb(98 84 243); 
    }
    .divider{
        height: 10px;
        width: 100%;
        position: relative;
        margin: 20px 0 ;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .divider::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background: rgba(0, 0, 0, 0.5);
        top: 50%;
        left: 0;
    }
    .divider::after{
        content: 'Or';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0 10px;
        background: white;
        color: rgba(0, 0, 0, 0.5);
    }
    .profile-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-around;
        width: 100%;
        height: 100%;
        padding: 2rem;
        input{
            height: 40px;
            width: 100%;
        }
    }
`;

export default Profile;