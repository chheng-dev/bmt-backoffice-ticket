import React, { useState, useRef, Fragment } from "react";
import Input from "antd/es/input/Input";
import { DatePicker } from "antd";
import { TimePicker } from "antd";
import dayjs from 'dayjs';
import { Space } from "antd";
import 'draft-js/dist/Draft.css';
import JoditEditor from "jodit-react";
import { InboxOutlined } from '@ant-design/icons';
import Dragger from "antd/es/upload/Dragger";
import { message } from "antd";
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
// import { Input, List } from "antd";

// import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";


const EditEvent = () => {
    const format = 'HH:mm';
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    const { ref } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        onPlaceSelected: (place) => {
            console.log(place);
        },
        options: {
            types: ["(regions)"],
            componentRestrictions: { country: "km" },
            defaultValue: "Soriya"
        },
        strictBounds: false
    });


    return (
        <>
            <Fragment>
                <div className="w-full">
                    <div className="my-4 flex bg-white p-4">
                        <h2 className="text-xl font-bold">Update Event</h2>
                    </div>
                    <div className="w-full bg-white p-4">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-xl font-semibold mb-4">Basic Info</h1>
                            <div className="mb-6">
                                <h3 for="full-name" className="leading-7 text-sm text-gray-600">Event Title</h3>
                                <Input />
                            </div>
                            <div className="mb-6">
                                <h3 for="full-name" className="leading-7 text-sm text-gray-600">Description</h3>
                                <JoditEditor />
                            </div>
                            <div className="w-full mb-6">
                                <div className="flex gap-4">
                                    <div className="flex w-1/2 justify-start items-center">
                                        <div className="block w-full">
                                            <h3 for="full-name" className="leading-7 text-sm text-gray-600">Event Starts</h3>
                                            <Space>
                                                <DatePicker className="w-72" />
                                                <TimePicker defaultValue={dayjs('12:08', format)} format={format} />
                                            </Space>
                                        </div>
                                    </div>
                                    <div className="flex w-1/2 justify-end  items-center">
                                        <div className="block">
                                            <h3 for="full-name" className="leading-7 text-sm text-gray-600">Event Ends</h3>
                                            <Space>
                                                <DatePicker className="md:w-80" />
                                                <TimePicker defaultValue={dayjs('12:08', format)} format={format} />
                                            </Space>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 for="full-name" className="leading-7 text-sm text-gray-600">Location</h3>
                                <Autocomplete
                                    ref={ref}
                                    className="border border-gray-200 w-full p-3 rounded-md"
                                // apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                                // onPlaceSelected={(place) => {
                                //     console.log(place);
                                // }}
                                />
                                {/* <div style={{ width: "250px" }}>
                            <span>Debounced</span>
                            <Input.Search
                                style={{ color: "black" }}
                                value={value}
                                placeholder="Debounce 500 ms"
                                onChange={(evt) => {
                                    getPlacePredictions({ input: evt.target.value });
                                    setValue(evt.target.value);
                                }}
                                loading={isPlacePredictionsLoading}
                            />
                            <div
                                style={{
                                    marginTop: "20px",
                                    width: "200px",
                                    height: "200px",
                                    display: "flex",
                                    flex: "1",
                                    flexDirection: "column",
                                    marginBottom: "100px",
                                }}
                            >
                                {!isPlacePredictionsLoading && (
                                    <List
                                        dataSource={placePredictions}
                                        renderItem={(item) => (
                                            <List.Item onClick={() => setValue(item.description)}>
                                                <List.Item.Meta title={item.description} />
                                            </List.Item>
                                        )}
                                    />
                                )}
                            </div>
                        </div> */}
                            </div>
                            <div className="mb-6">
                                <h3 for="full-name" className="leading-7 text-sm text-gray-600">Image</h3>
                                <Dragger {...props}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">
                                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                        band files
                                    </p>
                                </Dragger>
                            </div>
                            <div className="mt-3 mb-1 flex justify-end items-center">
                                <button type="button" className="btn-primary">Update & Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </>
    )
}

export default EditEvent;