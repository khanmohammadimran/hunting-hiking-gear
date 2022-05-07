import React from 'react';
// import './GetYourFirstOrder.css'
// import discount from '../../images/'

const GetYourFirstOrder = () => {
    return (
        <div>
            <h2 className="bg-[url('/src/images/equipemnt-homepage-background.png')] text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani">30% Off Your First Order </h2>
            <div className="bg-cover bg-center bg-no-repeat h-full bg-fixed" style={{ backgroundImage: `url("https://i.ibb.co/4YTrsC7/discount.jpg")` }}>
                <div>
                    <h2 className='text-6xl text-center py-8 drop-shadow-xl text-white font-bold font-rajdhani'>EXPERTS IN THE GREAT OUTDOORS <br /><span className='text-4xl'> Supplying quality outdoor gear for 50 years!</span> <br /><span className='text-4xl'>30% Off Your First Order</span></h2>
                    <div className="flex justify-center items-center py-8">
                        <div className="bg-slate-800 text-white rounded-lg w-full mx-5 md:w-[40rem]  space-y-6 p-10">
                            <div className="grid grid-cols-6 col-span-2   gap-2  ">
                                <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                                    <img className="h-full w-full object-cover "
                                        src="https://i.ibb.co/vs569qB/mountain-bag.jpg" alt="" />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                                    <img className="h-full w-full object-cover  "
                                        src="https://i.ibb.co/YLY1nxq/mountain-bike.jpg" alt="" />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <img className="h-full w-full object-cover "
                                        src="https://i.ibb.co/Krpn3Qy/climbing.jpg" alt="" />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <img className="h-full w-full object-cover "
                                        src="https://i.ibb.co/xDktJxr/skiing.jpg" alt="" />
                                </div>
                                <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <div
                                        className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                                        + 23
                                    </div>
                                    <img className="h-full w-full object-cover "
                                        src="https://i.ibb.co/k39cc34/helmet-1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default GetYourFirstOrder;