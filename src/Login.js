import React from 'react';

export default function Login() {
    return (
        <form className='w-25 m-auto mt-5'>
            <h2 className='mb-4'>Login</h2>
            <span>Unique technology already available for your business!</span>
            <div className="form-outline mb-4">
                <input type="login" id="form2Example1" className="form-control mt-3" placeholder='Login' />
                <input type="password" id="form2Example2" className="form-control mt-3" placeholder='Password' />
            </div>
            <button type="button" className="btn btn-primary btn-block mt-3 w-100">Sign in</button>
        </form>
    )
}