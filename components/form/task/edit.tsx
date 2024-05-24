'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Button from "@/components/buttons/button";

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}

interface EditFormProps {
    task: Task;
    taskId: string;
    onSave: (task: Task) => void;
}

const EditForm: React.FC<EditFormProps> = ({ task, taskId, onSave }) => {
    const [value, setValue] = useState<Task>(task);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        onSave(value);
    };

    const { title, description, status } = value || {};
    const statusList = ['new', 'pending', 'finished'];

    return (
        <form className={'flex flex-wrap flex-col gap-6'} onSubmit={handleSubmit}>
            <h1 className={'text-4xl mb-6'}>{title}</h1>
            <label className={'flex gap-4'}>
                Title:
                <input
                    className={'border px-4 py-2'}
                    type="text"
                    name="title"
                    onChange={handleChange}
                />
            </label>
            <label className={'flex gap-4'}>
                Description:
                <textarea
                    className={'border px-4 py-2'}
                    name="description"
                    onChange={handleChange}
                />
            </label>
            <label className={'flex gap-4'}>
                Status:
                <select
                    className={'border px-4 py-2'}
                    name="status"
                    onChange={handleChange}
                >
                    {statusList.map((statusOption, index) => (
                        <option key={index} value={statusOption}>
                            {statusOption}
                        </option>
                    ))}
                </select>
            </label>
            <Button typeButton="save" idParam={taskId}/>
        </form>
    );
}

export default EditForm;
