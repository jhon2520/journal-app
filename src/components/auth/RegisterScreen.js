import useForm from '../../hooks/useForm'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import validator from 'validator'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'


const RegisterScreen = () => {

    const dispatch = useDispatch();
    // el use selector retonar los objetos del state
    const state = useSelector(state=> state);
    const {ui} = state

    const [formValues,handleInputChange] = useForm({
        name:"jhon",
        email:"jhonmunozromer@gmail.com",
        password:"123456",
        password2:"123456",
    })

    const {name,email,password,password2} = formValues;

    const handleRegister = (e)=>{
        e.preventDefault();

        if(isFormValid()){
            console.log("formulario correcto");
            dispatch(startRegisterWithEmailPasswordName(email,password,name))
        }

        console.log(name,email,password,password2);
    }

    const isFormValid = () =>{

        if(name.trim().length === 0){
            dispatch(setError("name is required"));
            return false;
        }
       // npm i validator : para validar correos y otras cosas
        if(!validator.isEmail(email)){
            dispatch(setError("email isnt correct"));
            return false;
        }
        if(password !== password2 || password.length < 5){
            dispatch(setError("password incorrect"))
            return false;
        }

        dispatch(removeError())

        return true;
    }

    return (
        <div>
        <h3 className='auth__title'>Register</h3>
        <form onSubmit={handleRegister}>

            {  ui.msgError && (
                <div className="auth__alert-error">
                    {ui.msgError}
                </div>)
            }

            <input
                type="text"
                placeholder='Name'
                name="name"
                autoComplete='off'
                className='auth__input'
                value={name}
                onChange={handleInputChange}
                />
            <input
                type="text"
                placeholder='Email'
                name="email"
                autoComplete='off'
                className='auth__input'
                value={email}
                onChange={handleInputChange}
                
                />
            <input
                type="password"
                placeholder='Password'
                name="password"
                autoComplete='off'
                className='auth__input'
                value={password}
                onChange={handleInputChange}
                />
            <input
                type="password"
                placeholder='Confirm Password'
                name="password2"
                autoComplete='off'
                className='auth__input'
                value={password2}
                onChange={handleInputChange}
            />
            <button 
                className='btn btn-primary btn-block mb-5'
                type='submit'
            
            >
                Register
            </button>

            <hr />



            <Link 
                className='link mt-5'
                to="/auth/login">CAlready registered?</Link>
        </form>
    </div>
    )
}

export default RegisterScreen