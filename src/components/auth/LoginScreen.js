import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLoging, startLoginWithEmailPassword } from '../../actions/auth'

import useForm from '../../hooks/useForm'

const LoginScreen = () => {

    // hook de react redux para disparar el dispatch
    const dispatch = useDispatch();

    const state = useSelector(state => state.ui);
    const {loading} = state

    const [formValues,handleInputChange] = useForm({
        email:"jhonmunozromero1@gmail.com",
        password:"123456"
    })

    const {email,password} = formValues;

    const handleLogin = (e)=>{
        e.preventDefault();
        dispatch(startLoginWithEmailPassword(email,password))
        
    }

    const handleGoogleLogin = () =>{
        dispatch(startGoogleLoging())
    }

    return (
        <div>
            <h3 className='auth__title'>Login</h3>
            <form onSubmit={handleLogin}> 
                <input
                    type="text"
                    placeholder='Email'
                    name="email"
                    autoComplete='false'
                    className='auth__input'
                    value={email}
                    onChange={handleInputChange}
                    />
                <input
                    type="password"
                    placeholder='Password'
                    name="password"
                    autoComplete='false'
                    className='auth__input'
                    value={password}
                    onChange={handleInputChange}
                />
                <button 
                    className='btn btn-primary btn-block'
                    type='submit'
                    disabled={loading}
                >
                    Login
                </button>

                <hr />

                <div className='auth__social-network'>
                    <p>Login With social network</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    className='link'
                    to="/auth/register">Crate new account</Link>
            </form>
        </div>
    )
}

export default LoginScreen