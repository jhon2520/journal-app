import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router,Switch,Redirect } from 'react-router-dom'
import JournalScreen from '../components/journal/JournalScreen'
import AuthRouter from './AuthRouter'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const AppRouter = () => {

    const dispatch = useDispatch();

    // bandera que revisa el estado de firebase para determinar si el usuario sigue 
    // y qué se reenderiza
    const [checking,setChecking] = useState(true);
    const [isLoggeIn, setIsLoggeIn] = useState(false);


    // para mantener el usuario autentificado aún si se recarga la página
    useEffect(()=>{

        const auth = getAuth();
        onAuthStateChanged(auth,(user)=>{

            //console.log(user);
            // Validar que estoy autentificado
            if(user?.uid){
                dispatch(login(user.uid,user.displayName))
                // si hay respuesta, el usuario está logeado
                setIsLoggeIn(true)
            }else{
                setIsLoggeIn(false)
            }

            // cuando ya tenga una respuesta el checking va a ser false
            setChecking(false);
        })

    },[dispatch,setChecking,setIsLoggeIn])


    if(checking){
        return(
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={AuthRouter} 
                        isAuthenticated={isLoggeIn}
                        />
                    <PrivateRoute 
                        isAuthenticated={isLoggeIn}
                        exact 
                        path="/" 
                        component={JournalScreen} />

                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter