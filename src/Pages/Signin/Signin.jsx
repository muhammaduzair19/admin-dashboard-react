import { Link } from 'react-router-dom';
import './signin.css'

function Signin() {
    return (
        <>
            <div id="main">
                <div className="signin-container">
                    <div className="signin-section">

                        <h3 className="signin-heading">
                            Sign in
                        </h3>

                        <form className='signin-form'>
                            <label htmlFor="email">
                                <input className='signin-input' type="email" placeholder='Email' />
                            </label>

                            <label htmlFor="password" >
                                <input className='signin-input' type="password" placeholder='Password' />
                            </label>

                            <button className="signin-btn">Sign in</button>
                        </form>

                    </div>

                    <div to='/signup' className="tag-line">Do not have account</div>
                </div>
            </div>
        </>
    )
}

export default Signin;