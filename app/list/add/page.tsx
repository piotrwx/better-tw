'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { createTask, Task } from "@/hooks/taskController";
import Button from "@/components/buttons/button";

const AddTaskForm = () => {
    const statusList = ['new', 'pending', 'finished'];

    const [task, setTask] = useState({
        title: '',
        description: '',
        status: statusList[0]
    });
    const { title, description, status } = task || {}; // Dodajemy warunek sprawdzający, czy value nie jest puste

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            console.log(task)
            await createTask(task);
            console.log("Task added successfully!");
            // Clear the form fields after adding the task
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    className='border'
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    className='border'
                />
            </label>
            <label className={'flex gap-4'}>
                Status:
                <select
                    className={'border px-4 py-2'}
                    name="status"
                    value={status}
                    onChange={handleChange}
                >
                    {statusList.map((statusOption, index) => (
                        <option key={index} value={statusOption}  defaultValue={index === 0 ? statusOption : ''}>
                            {statusOption}
                        </option>
                    ))}
                </select>
            </label>
            <Button typeButton='add-new'/>
        </form>
    );
};

export default AddTaskForm;