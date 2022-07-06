import React, {useState} from 'react';
import './LoginScreen.css'
import SignupScreen from "./SignupScreen";

function LoginScreen() {
    const[signIn,setSignIn]=useState(false)

    return (
        <div className="relative h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-no-repeat	bg-center bg-cover">
            <div className="">
                <img className="fixed w-[150px] pl-[20px] object-contain" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix logo"/>
                <button onClick={() => setSignIn(true)}
                        className="fixed right-[20px] text-base	top-[20px] text-white font-semibold bg-[#e50914] px-[20px] py-[10px] cursor-pointer">
                    Sign In
                </button>
                <div className="LoginScreen_gradient"/>
            </div>

            <div  className="absolute z-50 text-white top-1/3 mx-auto text-center w-full inset-x-0	">
                {signIn ? (
                    <SignupScreen />
                ) :(
                    <>
                        <h1 className="font-extrabold text-5xl">Unlimited films,TV programmes and more.</h1>
                        <h2 className="text-[2rem] mb-[20px]">Watch anywhere.Cancel at any time</h2>
                        <h3 className="text-[1.3rem]">Ready to watch?Enter your email to create or restart your membership</h3>
                        <div className="m-[20px]">
                            <form>
                                <input type="email" placeholder="Email Address" className="p-[10px] h-[30px] max-w-[600px] w-2/6"/>
                                <buton onClick={() => setSignIn(true)}
                                       className="px-[20px] py-[10px] bg-[#e50914] font-semibold cursor-pointer">GET STARTED</buton>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default LoginScreen;