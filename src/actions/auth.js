import TYPES from "../types/types"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebaseConfig';
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";


// función asincrona ya que se tiene instalado el thunk
export const startLoginWithEmailPassword = (email,password) =>{

    
    // este dispatch lo da el thunk
    return (dispatch)=>{
        
        // hacer dispatch del startloading
        dispatch(startLoading())
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(({user})=>{
            
                dispatch (login(user.uid,user.displayName))
                // hacer dispatch del finishloading
                dispatch(finishLoading())
            })
            .catch(e=>{
                console.log(e)
                dispatch(finishLoading());
                Swal.fire("Error", e.message,"error")
            })        

    }
}

export const startRegisterWithEmailPasswordName = (email,password,name) =>{
    return(dispatch)=>{

        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
            .then(async ({user})=>{

                await updateProfile(user,{displayName:name})
               // console.log(user);
                dispatch (
                    login(user.uid,user.displayName)
                )
            })
            .catch(e=>{
                console.log(e)
                Swal.fire("Error", e.message,"error")
            })        

    }
}



// retorna un callback porque esta es una función asincrona

export const startGoogleLoging = ()=>{
    return(dispatch)=>{

        // const auth = getAuth();
        // signInWithPopup(auth, googleAuthProvider)
        // obtener la información de la autentificación
        // .then(userCredential =>console.log(userCredential))

        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });

    }
}


export const login = (uid,displayName)=>{
    return{
        type:TYPES.LOGIN,
        payload:{
            uid,
            displayName
        }
    }
}

export const startLogout = ()=>{
    return async(dispatch)=>{
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout())
    }
}

export const logout =()=>{
    return{
        type:TYPES.LOGOUT
    }
}