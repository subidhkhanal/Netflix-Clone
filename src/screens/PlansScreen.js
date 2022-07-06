import React from 'react';

function PlansScreen() {

    return (
        <div className="flex flex-col">
        <div className="">
            <div className="flex justify-between pt-[10px] pb-[10px] opacity-80 hover:opacity-100">
                <h5 className="flex flex-col">Premium <span>4k + HDR</span></h5>
                <button className="py-[10px] px-[20px] text-white bg-[#e50914] font-semibold">Subscribe</button>
            </div>

                <div className="flex justify-between pt-[10px] pb-[10px] opacity-80 hover:opacity-100">
                    <h5 className="flex flex-col">Premium <span>4k + HDR</span></h5>
                    <button className="py-[10px] px-[20px] text-white bg-[#e50914] font-semibold">Subscribe</button>
                </div>
                    <div className="flex justify-between pt-[10px] pb-[10px] opacity-80 hover:opacity-100">
                        <h5 className="flex flex-col">Premium <span>4k + HDR</span></h5>
                        <button className="py-[10px] px-[20px] text-white bg-[#e50914] font-semibold">Subscribe</button>
                    </div>
                </div>
        </div>
    );
}

export default PlansScreen;