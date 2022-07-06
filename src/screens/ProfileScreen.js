import React from 'react';
import Nav from "../Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {auth} from "../firebase";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
    const user=useSelector(selectUser)
    return (
        <div className="h-screen text-white">
            <Nav />
            <div className="flex flex-col w-[50%] mx-auto pt-[8%] max-w-[800px]">
                <h1 className="text-[60px] mb-[20px] border-b-[1px] border-solid border-b-[#282c2d]">Edit Profile</h1>
                <div className="flex">
                    <img className="h-[100px]" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix-logo"/>
                    <div className="text-white ml-[25px] flex-1">
                        <h2 className="bg-gray-500 p-[15px] text-[15px] pl-[20px]">{user.email}</h2>
                        <div className="mt-[20px]">
                            <h3 className="border-b-[1px] border-solid border-b-[#282c2d] pb-[10px]">Plans</h3>
                            <PlansScreen />
                            <button onClick={() => auth.signOut()}
                                    className="text-white py-[10px] px-[20px] mt-[5%] w-full bg-[#e50914]">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;