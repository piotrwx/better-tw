'use client';
import React, { useState, useEffect } from "react";
import Button from "@/components/buttons/button";
import { getAllTasks } from "@/hooks/taskController";

interface ListElement {
    id: number;
    title: string;
    description: string;
    status: string;
}

const ListPage = () => {
    const [listData, setListData] = useState<ListElement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllTasks();
                if (data && Array.isArray(data)) {
                    setListData(data);
                    setLoading(false);
                } else {
                    throw new Error("Data received from useListData is not in the expected format.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='flex justify-between'>
                <h1 className='text-7xl block'>Tasks</h1>
                <Button typeButton="add"/>
            </div>
            <div className="flex flex-wrap w-full ">
                <div className="flex p-4 justify-between w-full">
                    <div className='basis-1/5'>ID</div>
                    <div className='basis-1/5'>Title</div>
                    <div className='basis-1/5'>Description</div>
                    <div className='basis-1/5'>Status</div>
                    <div className='basis-1/5'>Action</div>
                    <div className='basis-1/5'></div>
                </div>
                <div className="flex cursor-pointer flex-col w-full [&>*:nth-child(odd)]:bg-gray-100">
                    {listData.length > 0 ? (
                        listData.map((item: ListElement, index: number) => (
                            <div className="flex p-4 justify-between" key={index} title={item.title}>
                                <div className='basis-1/5'>{item.id}</div>
                                <div className='basis-1/5'>{item.title}</div>
                                <div className='basis-1/5'>{item.description}</div>
                                <div className='basis-1/5'>{item.status}</div>
                                <Button classNameElement='basis-1/5' typeButton="remove" idParam={item.id}/>
                                <Button classNameElement='basis-1/5' typeButton="edit" idParam={item.id}/>
                            </div>
                        ))
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ListPage;
