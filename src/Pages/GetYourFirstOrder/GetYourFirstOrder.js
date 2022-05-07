import React from 'react';
// import './GetYourFirstOrder.css'
// import discount from '../../images/'

const GetYourFirstOrder = () => {
    return (
        <div>
            <h2 className="bg-[url('/src/images/equipemnt-homepage-background.png')] text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani">30% Off Your First Order </h2>
            <div className="bg-cover bg-center bg-no-repeat h-full bg-fixed" style={{ backgroundImage: `url("https://i.ibb.co/4YTrsC7/discount.jpg")` }}>
                <div>
                    <h2 className='text-5xl text-center py-4 
drop-shadow-xl text-white font-bold font-rajdhani'>EXPERTS IN THE GREAT OUTDOORS <br /> Supplying quality outdoor gear for 50 years!</h2>
                    <div class="flex justify-center items-center py-8">
                        <div class="bg-slate-800 text-white rounded-lg w-full mx-5 md:w-[40rem]  space-y-6 p-10">
                            <div class="grid grid-cols-6 col-span-2   gap-2  ">
                                <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                                    <img class="h-full w-full object-cover "
                                        src="https://i.ibb.co/vs569qB/mountain-bag.jpg"
                                        alt=""></img>
                                </div>
                                <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                                    <img class="h-full w-full object-cover  "
                                        src="https://i.ibb.co/YLY1nxq/mountain-bike.jpg"
                                        alt=""></img>
                                </div>
                                <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <img class="h-full w-full object-cover "
                                        src="https://i.ibb.co/Krpn3Qy/climbing.jpg"
                                        alt=""></img>
                                </div>
                                <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <img class="h-full w-full object-cover "
                                        src="https://i.ibb.co/xDktJxr/skiing.jpg"
                                        alt=""></img>
                                </div>
                                <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <div
                                        class="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                                        + 23
                                    </div>
                                    <img class="h-full w-full object-cover "
                                        src="https://i.ibb.co/k39cc34/helmet-1.jpg"
                                        alt=""></img>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* <div class="py-4">
                        <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                            <div>
                                <div class="w-full image-cover rounded-t-md" >
                                    <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span class="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div>
                                </div>
                                <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span class="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span class="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div>
                            </div>
                            <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                                <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span>
                                <div class="pt-8 text-center">
                                    <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
            {/* <div className="bg-[url('/src/images/equipemnt-homepage-background.png')]"> */}

            {/* </div> */}

        </div >
    );
};

export default GetYourFirstOrder;