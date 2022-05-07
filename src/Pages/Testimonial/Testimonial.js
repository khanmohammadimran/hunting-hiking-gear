import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <div className="py-16 white bg-[url('/src/images/equipemnt-homepage-background.png')] ">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <h2 className="text-center pb-16 text-lime-500 font-bold text-6xl font-rajdhani">What's our customers say</h2>
                    <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                        <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                            <div className="h-full flex flex-col justify-center space-y-4">
                                <img className="w-20 h-20 mx-auto rounded-full" src="https://i.ibb.co/25hNL2d/oscar-sutton-D6u-PSk8-VK-4-unsplash-1.png" alt="user avatar" width="220" loading="lazy" />
                                <p className="text-gray-600 md:text-xl"> <span className="font-rajdhani">"</span> I had a fantastic experience with "Hiking Equipment" everything goes perfectly. Their equipment are great. Also they meet the deadline for supply the equipments. It was a memorial experience <span className="font-rajhdhani">"</span></p>
                                <div>
                                    <h6 className="text-lg font-semibold leading-none">Matt Smith</h6>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                            <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                <p className="text-gray-600"> <span className="font-rajdhani">"</span> We got a great deal from "Hiking Equipment". I would definitely recommend for all travel planning needs. <span className="font-rajdhani">"</span></p>
                                <div>
                                    <h6 className="text-lg font-semibold leading-none">Martin Russo</h6>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                            <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                <p className="text-gray-600"> <span className="font-rajdhani">"</span> They are Awesome! I have been recommending to them to everyone I know. <span className="font-rajdhani">"</span></p>
                                <div>
                                    <h6 className="text-lg font-semibold leading-none">David Katz</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;