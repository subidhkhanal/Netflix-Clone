import React, {useRef} from 'react';
import {auth} from '../firebase'

function SignupScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser) =>{
        console.log(authUser);
        })
            .catch((error) =>{
                alert(error.message);
            })
    }

    const signIn = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => alert(error.message)
            )}

    return (
        <div className="max-w-[330px] p-[70px] mx-auto bg-[#000000d9]">
            <form className="grid flex-col">
                <h1 className="text-left mb-[25px] font-bold text-5xl">Sign In</h1>
                <input ref={emailRef} className="mb-[14px] h-[40px] rounded-md	text-black py-[5px] px-[15px]" placeholder="Email" type="email"/>
                <input ref={passwordRef} className="mb-[14px] h-[40px] rounded-md text-black py-[5px] px-[15px]" placeholder="Password" type="password"/>
                <button onClick={signIn} className="px-[20px] py-[16px] text-[1rem] rounded-md bg-[#e50914]" type="submit">Sign In</button>
                <h4 className="text-left mt-[30px]">
                    <span className="text-gray-600">New to Netflix?</span>
                    <span className="hover:cursor-pointer hover:underline" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;