import React from "react";
import Chart from "./Chart";
import { FiBarChart, FiDollarSign, FiTrendingUp, FiUsers } from "react-icons/fi";



const Card = () => {
    // const [loading,setLoading] = useState(false)

    // if(loading){
    //     return <Loading/>
    // }
    return (
        <>
            <div className="w-full">
                <div className="lg:flex grid grid-cols-1 gap-4 md:grid md:grid-cols-2">
                    <div className="lg:flex lg:w-1/4">
                        <div className="w-full bg-white rounded-lg shadow-md p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">New Users</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">334,100</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-md rounded-full  bg-blue-500">
                                        <FiUsers className="text-2xl" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 2,99% </span>
                                <span className="whitespace-nowrap"> Since last month </span></p>
                        </div>

                    </div>

                    <div className="lg:flex lg:w-1/4">
                        <div className="w-full bg-white rounded-lg shadow-md p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">Total Upcoming Event</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">2,999</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-md rounded-full  bg-pink-500">
                                        <FiTrendingUp className="text-2xl" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 4,01%</span>
                                <span className="whitespace-nowrap"> Since last week </span></p>
                        </div>

                    </div>

                    <div className="lg:flex lg:w-1/4">

                        <div className="w-full bg-white p-4 rounded-lg shadow-md">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">Total Orders</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">901</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-md rounded-full  bg-blue-500">
                                        {/* <FiBarChart className="text-2xl"/> */}
                                        <svg t="1671691502543" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13567" width="32" height="32"><path d="M85.971024 102.704127 85.971024 102.704127c-12.929474 0-23.415292 10.491958-23.414269 23.416316 0 12.929474 10.485819 23.415292 23.414269 23.415292l0 0.024559c0.865717 0.045025 1.689479 0.25685 2.554172 0.25685l63.323211 0 69.77925 577.790402c-30.463826 18.47784-51.000558 51.610448-51.000558 89.830935 0 58.168818 47.209208 105.378026 105.383142 105.378026 45.871747 0 84.584444-29.507034 98.986455-70.464865l6.391571-23.205515 257.597893 0 6.391571 23.205515c14.47262 40.957831 53.089126 70.464865 98.986455 70.464865 58.193377 0 105.383142-47.209208 105.383142-105.378026s-47.189765-105.382119-105.383142-105.382119c-45.732577 0-84.304058 29.319769-98.870822 70.042239L375.09084 782.098601c-13.115716-36.390815-45.597501-63.365166-85.126796-68.680219l-3.0208-24.989137 410.445046 0c2.879584 0.23536 8.919137 0.209778 11.848862 0.209778 56.274678 0 103.2035-39.692001 114.443495-92.619444 0.211824-0.538259 0.652869-1.050935 0.819668-1.638313l82.689281-327.403748 24.375154 0c2.366907 0 4.523013 0.236384 6.743588 0.398066l3.025916-1.261737c10.818393-2.065032 19.129686-11.149944 19.129686-22.551622 0-12.929474-10.491958-23.420409-23.415292-23.420409-0.819668 0-1.503237 0.402159-2.295276 0.470721-1.075495-0.118704-2.085498-0.470721-3.186576-0.470721l-724.664517 0L194.112999 114.387213c-0.089028-0.397043-0.397043-0.633427-0.487094-1.004887-0.774643-18.7132-15.951297-10.32516-34.848693-10.32516l-70.254064 0c-0.376577 0-0.679475-0.050142-1.029446-0.050142C86.97591 102.985536 86.507236 102.704127 85.971024 102.704127M744.362138 876.054483 744.362138 876.054483c-32.340569 0-58.540278-26.205848-58.540278-58.545394 0-32.340569 26.199709-58.545394 58.540278-58.545394 32.339546 0 58.546418 26.203802 58.546418 58.545394C802.908556 849.849658 776.701684 876.054483 744.362138 876.054483M217.463824 817.510112 217.463824 817.510112c0-32.340569 26.203802-58.545394 58.545394-58.545394 32.339546 0 58.540278 26.203802 58.540278 58.545394 0 32.339546-26.200732 58.545394-58.540278 58.545394C243.668649 876.054483 217.463824 849.849658 217.463824 817.510112M254.999718 641.662105 254.999718 641.662105l-39.596833-374.683565 642.396839 0-41.706891 187.555653-34.496675 134.652769c-2.009773 23.998577-24.422226 52.685943-48.942689 52.685943L568.731072 641.872906l0-0.211824L254.999718 641.661082M254.999718 641.662105 254.999718 641.662105z" p-id="13568" fill="#e6e6e6"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 1,25% </span>
                                <span className="whitespace-nowrap"> Since yesterday </span></p>
                        </div>

                    </div>


                    <div className="lg:flex lg:w-1/4">

                        <div className="w-full bg-white p-4 rounded-lg shadow-md">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">Total Sales</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">51.02% </span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-md rounded-full  bg-emerald-500">
                                        <FiDollarSign className="text-2xl" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 12% </span>
                                <span className="whitespace-nowrap"> Since last mounth </span></p>
                        </div>
                    </div>

                </div>
                <Chart />
            </div>
        </>
    )
}


export default Card;