import React, { Fragment } from "react";
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
import Autocomplete from "react-google-autocomplete";
import { withRouter } from "react-router";

const CreateEvent = () => {
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

    return (
        <>
            <Fragment>
                <div className="w-full">
                    <div className="my-4 flex bg-white p-4">
                        <h2 className="text-xl font-bold">Create Event</h2>
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
                                    className="border border-gray-200 w-full p-3 rounded-md"
                                    apiKey={`AIzaSyCN1jgYgkuvHq5hET1b0_UF4BCv7zdub0E`}
                                    onPlaceSelected={(place) => {
                                        console.log(place);
                                    }}
                                />
                            </div>
                            <div className="mb-6">
                                <h3 for="full-name" className="leading-7 text-sm text-gray-600">Image</h3>
                                <Dragger {...props}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">Upload a file or drag and drop</p>
                                    <p className="ant-upload-hint">
                                    PNG, JPG, GIF up to 10MB
                                    </p>
                                </Dragger>
                            </div>
                            <div className="mt-3 mb-1 flex justify-end items-center">
                                <button type="button" className="btn-primary">Save & Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </>
    )
}

export default CreateEvent;