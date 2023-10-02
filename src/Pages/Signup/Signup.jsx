import './signup.css'
import { Link } from 'react-router-dom';


function Signup() {
    return (
        <>
            <div id="main">
                <div className="signup-container">

                    <div className="signup-section">
                        <h3 className="signup-heading">
                            Sign Up
                        </h3>
                        <form className='signup-form'>
                            <label htmlFor="email">
                                <input className='signup-input' type="email" placeholder='Email' />
                            </label>
                            <label htmlFor="username">
                                <input className='signup-input' type="text" placeholder='Username' />
                            </label>
                            <label htmlFor="password" >
                                <input className='signup-input' type="password" placeholder='Password' />
                            </label>
                            <label htmlFor="re-password">
                                <input className='signup-input' type="password" placeholder='Confirm Password' />
                            </label>
                            <button className="signup-btn">Sign up</button>
                        </form>
                    </div>
                    <div to="/signin" className="tag-line">Already have an account?</div>

                </div>
            </div>
        </>
    )
}

export default Signup;