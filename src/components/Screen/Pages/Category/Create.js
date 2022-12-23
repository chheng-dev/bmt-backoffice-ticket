import React, { useState, Fragment } from "react";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import axios from "axios"
import Loading from "../Loading";

const CreateCategory = () => {
    const [loading, setLoading] = useState(false)
    const [category, setCategoryName] = useState('');
    const [slug, setSlugName] = useState('');
    const handleCreateCategory = async () => {
        try {
            setLoading(true)
            await axios.post(`https://api.escuelajs.co/api/v1/categories`, {
                name: category,
                image: "https://burst.shopifycdn.com/photos/crowd-participating-at-event.jpg?width=1200&format=pjpg&exif=1&iptc=1"
            }, []).then(() => {
                setLoading(false)
            })


        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Fragment>

                <div className="w-full">
                    <div className="my-4 flex bg-white p-4">
                        <h2 className="text-xl font-bold">Create Category</h2>
                    </div>
                    <div className="w-full bg-white p-4">
                      
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-xl font-semibold mb-4">Category Info</h1>
                                <div>
                                    <h2 className="my-3">Category</h2>
                                    <Input onChange={(e) => setCategoryName(e.target.value)} />
                                </div>
                                <div>
                                    <h2 className="my-3">Slug (URL)</h2>
                                    <Input onChange={(e) => setSlugName(e.target.value)} />
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

export default CreateCategory