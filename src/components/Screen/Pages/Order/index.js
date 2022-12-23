import React from "react";
import { Table } from "antd";
import Column from "antd/es/table/Column";
import Link from "antd/es/typography/Link";
import { Space, Button } from "antd";
import { Input, Select } from "antd";
import { Popover } from "antd";
import { DatePicker } from "antd";
import dayjs from 'dayjs';

const data = [
    {
        key: '1',
        idx: 1,
        name: 'John Brown',
        qty: 32,

    },
    {
        key: '2',
        idx: 2,
        name: 'Jim Green',
        qty: 42,

    },
    {
        key: '3',
        idx: 3,
        name: 'Joe Black',
        qty: 32,
        eventType: 'Football',
    },
    {
        key: '4',
        idx: 4,
        name: 'Jim Red',
        qty: 32,

    },
];

const contentAllOrder = (
    <div className="">
        {/* <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 dark:border-gray-400 dark:bg-gray-400">
            <h3 class="font-semibold text-gray-900 dark:text-white">Search</h3>
        </div> */}
        <div class="px-3 py-2 text-gray-500">
            <Select
                showSearch
                style={{
                    width: 200,
                }}
                placeholder="Search Event Type"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                    {
                        value: '1',
                        label: 'New Order',
                    },
                    {
                        value: '2',
                        label: 'Pending',
                    },
                    {
                        value: '3',
                        label: 'Cancel',
                    },
                ]}
            />
        </div>
        <div className="mt-3 px-3 py-1 bg-gray-200 text-white">
            <div className="flex">
                <div className="flex w-1/2 justify-start items-center">
                    <Link>Reset</Link>
                </div>
                {/* <div className="flex w-1/2 justify-end items-center">
                    <Link>
                        <span className="text-gray-400">Apply</span>
                    </Link>
                </div> */}
            </div>
        </div>
    </div>
);

const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
});

const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
};

const Order = (props) => {
    const { match } = props;
    return (

        <div className="w-full">
            <div className="my-4 flex bg-white p-4 ">
                <div className="flex w-1/2 justify-start items-center">
                    <h2 className="text-xl font-bold">Order Lists</h2>
                </div>
                <div className="flex w-1/2 justify-end items-center">
                    <Link to={`/event/create`}>
                        {/* <button className="btn-primary">
                            Create Order
                        </button> */}
                    </Link>
                </div>
            </div>
            <div className="lg:flex grid grid-cols-1 gap-4 md:grid md:grid-cols-2">
                <div className="lg:flex lg:w-1/3">
                    <div className="w-full bg-white rounded-lg shadow-sm p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs"> New Orders</h5>
                                <span className="font-semibold text-xl text-blueGray-700">334,100</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-sm rounded-full  bg-red-500">
                                    <svg t="1671691502543" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13567" width="32" height="32"><path d="M85.971024 102.704127 85.971024 102.704127c-12.929474 0-23.415292 10.491958-23.414269 23.416316 0 12.929474 10.485819 23.415292 23.414269 23.415292l0 0.024559c0.865717 0.045025 1.689479 0.25685 2.554172 0.25685l63.323211 0 69.77925 577.790402c-30.463826 18.47784-51.000558 51.610448-51.000558 89.830935 0 58.168818 47.209208 105.378026 105.383142 105.378026 45.871747 0 84.584444-29.507034 98.986455-70.464865l6.391571-23.205515 257.597893 0 6.391571 23.205515c14.47262 40.957831 53.089126 70.464865 98.986455 70.464865 58.193377 0 105.383142-47.209208 105.383142-105.378026s-47.189765-105.382119-105.383142-105.382119c-45.732577 0-84.304058 29.319769-98.870822 70.042239L375.09084 782.098601c-13.115716-36.390815-45.597501-63.365166-85.126796-68.680219l-3.0208-24.989137 410.445046 0c2.879584 0.23536 8.919137 0.209778 11.848862 0.209778 56.274678 0 103.2035-39.692001 114.443495-92.619444 0.211824-0.538259 0.652869-1.050935 0.819668-1.638313l82.689281-327.403748 24.375154 0c2.366907 0 4.523013 0.236384 6.743588 0.398066l3.025916-1.261737c10.818393-2.065032 19.129686-11.149944 19.129686-22.551622 0-12.929474-10.491958-23.420409-23.415292-23.420409-0.819668 0-1.503237 0.402159-2.295276 0.470721-1.075495-0.118704-2.085498-0.470721-3.186576-0.470721l-724.664517 0L194.112999 114.387213c-0.089028-0.397043-0.397043-0.633427-0.487094-1.004887-0.774643-18.7132-15.951297-10.32516-34.848693-10.32516l-70.254064 0c-0.376577 0-0.679475-0.050142-1.029446-0.050142C86.97591 102.985536 86.507236 102.704127 85.971024 102.704127M744.362138 876.054483 744.362138 876.054483c-32.340569 0-58.540278-26.205848-58.540278-58.545394 0-32.340569 26.199709-58.545394 58.540278-58.545394 32.339546 0 58.546418 26.203802 58.546418 58.545394C802.908556 849.849658 776.701684 876.054483 744.362138 876.054483M217.463824 817.510112 217.463824 817.510112c0-32.340569 26.203802-58.545394 58.545394-58.545394 32.339546 0 58.540278 26.203802 58.540278 58.545394 0 32.339546-26.200732 58.545394-58.540278 58.545394C243.668649 876.054483 217.463824 849.849658 217.463824 817.510112M254.999718 641.662105 254.999718 641.662105l-39.596833-374.683565 642.396839 0-41.706891 187.555653-34.496675 134.652769c-2.009773 23.998577-24.422226 52.685943-48.942689 52.685943L568.731072 641.872906l0-0.211824L254.999718 641.661082M254.999718 641.662105 254.999718 641.662105z" p-id="13568" fill="#e6e6e6"></path></svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 2,99% </span>
                            <span className="whitespace-nowrap"> Since last month </span></p>
                    </div>

                </div>

                <div className="lg:flex lg:w-1/3">
                    <div className="w-full bg-white rounded-lg shadow-sm p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Pending Order</h5>
                                <span className="font-semibold text-xl text-blueGray-700">2,999</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-sm rounded-full  bg-pink-500">
                                    <svg t="1671691370107" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12404" width="32" height="32"><path d="M512 981.333333C253.013333 981.333333 42.666667 770.986667 42.666667 512S253.013333 42.666667 512 42.666667s469.333333 210.346667 469.333333 469.333333-210.346667 469.333333-469.333333 469.333333z m0-844.501333A375.125333 375.125333 0 0 0 136.832 512 375.125333 375.125333 0 0 0 512 887.168 375.125333 375.125333 0 0 0 887.168 512 375.125333 375.125333 0 0 0 512 136.832z" fill="#ffffff" p-id="12405"></path><path d="M711.338667 695.637333a52.906667 52.906667 0 0 1-26.666667-7.850666l-199.338667-136.533334a49.066667 49.066667 0 0 1-20.437333-39.253333V226.304c0-26.666667 20.437333-47.061333 47.104-47.061333 26.666667 0 47.104 20.394667 47.104 47.061333v260.565333l178.944 122.453334c21.973333 14.122667 26.666667 43.946667 12.544 65.92-9.386667 14.122667-23.552 20.394667-39.253333 20.394666z" fill="#ffffff" p-id="12406"></path></svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 4,01%</span>
                            <span className="whitespace-nowrap"> Since last week </span></p>
                    </div>

                </div>

                <div className="lg:flex lg:w-1/3">

                    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Cancel Order</h5>
                                <span className="font-semibold text-xl text-blueGray-700">901</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-sm rounded-full  bg-red-500">
                                    <svg t="1671690410267" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7108" width="32" height="32"><path d="M832 800c-44.224 0-80 35.808-80 80a80 80 0 1 0 160 0 80 80 0 0 0-80-80z m-495.984 0a80 80 0 1 0-0.048 160 80 80 0 0 0 0.048-160z m208-237.28l71.68-71.68 71.68 71.68 51.248-51.232-71.68-71.68 71.68-71.696-51.232-51.232-71.68 71.68L544 316.88l-51.232 51.232 71.68 71.68-71.68 71.696L544 562.72zM360.16 144l10.752 79.84H912.96c-7.84 48-24.128 154.624-57.936 371.424-5.184 33.12-37.568 60.736-70.72 60.736H425.2c-33.28 0-66.272-27.92-70.592-60.016-51.84-385.712-56.032-417.76-56.16-418.656C287.616 104.992 221.808 48 148.64 48H16v80h132.64c32.8 0 65.824 28.896 70.592 60.624 0 0 4.064 30.752 56.096 417.792 9.6 71.472 76.832 129.584 149.872 129.584H784.32c72.704 0 138.496-56.24 149.76-128.448C1003.968 159.392 998.208 192 1006.496 144H360.192z" fill="#e6e6e6" p-id="7109"></path></svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 1,25% </span>
                            <span className="whitespace-nowrap"> Since yesterday </span></p>
                    </div>

                </div>

            </div>

            <div className="bg-white my-4 p-4">
                <div className="mb-4">
                    <Space>
                        <Input.Group compact>
                            <Input
                                placeholder="Search Anything...."
                                style={{
                                    width: '200px'
                                }}
                            />
                            <Button>Search</Button>
                        </Input.Group>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm"
                            disabledDate={disabledDate}
                            disabledTime={disabledDateTime}
                            showTime={{
                                defaultValue: dayjs('00:00', 'HH:mm'),
                            }}
                        />
                        <Popover placement="bottom" content={contentAllOrder} trigger="click">
                            <Button>All Orders</Button>
                        </Popover>
                    </Space>
                </div>
                <Table bordered size={"small"} dataSource={data}>
                    <Column
                        title="Id"
                        key="idx"
                        dataIndex={'idx'}
                        align="center"
                        width={80}
                    />
                    <Column
                        title="Event name"
                        key="event"
                        dataIndex={'name'}
                    />
                    <Column
                        title="Quantity"
                        key="status"
                        width={120}
                        align="center"
                        dataIndex={'qty'}
                    />
                    <Column
                        title="Price"
                        key="price"
                        width={120}
                        align="center"
                        render={(_, record) => (
                            <span className="font-bold text-red-700">
                                $10.00
                            </span>
                        )}
                    />
                    <Column
                        title="Action"
                        key="action"
                        width={120}
                        render={(_, record) => (
                            <div className="inline-flex items-center rounded-md">
                                {/* <Link to={`${match.path}/${record.id}`}> */}
                                <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    </span>
                                </button>
                                {/* </Link> */}

                                <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </span>
                                </button>
                                <button className=" text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        )}
                    />
                </Table>
            </div>
        </div>
    )
}


export default Order;