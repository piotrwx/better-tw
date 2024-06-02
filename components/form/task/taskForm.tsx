'use client'
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from "@/components/buttons/button";
import { Task } from "@/hooks/taskController";

// Define the schema using zod
const taskSchema = z.object({
    title: z.string().min(1, "Title is required").max(50, "Title must be at most 50 characters"),
    description: z.string().min(1, "Description is required").max(500, "Description must be at most 500 characters"),
    status: z.enum(['new', 'pending', 'finished'])
});

type TaskFormInputs = z.infer<typeof taskSchema>;

interface TaskFormProps {
    task?: Task;
    onSave: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSave }) => {
    const statusList = ['new', 'pending', 'finished'];

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<TaskFormInputs>({
        resolver: zodResolver(taskSchema),
        defaultValues: task || {
            title: '',
            description: '',
            status: statusList[0]
        }
    });

    const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
        onSave({ ...task, ...data } as Task);
        if (!task) reset(); // Clear form if it's a new task
    };

    useEffect(() => {
        if (task) {
            setValue("title", task.title);
            setValue("description", task.description);
            setValue("status", task.status);
        }
    }, [task, setValue]);

    return (
        <form className={'flex flex-wrap flex-col gap-6'} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={'text-4xl mb-6'}>{task ? 'Edit Task' : 'Add New Task'}</h1>
            <label className={'flex gap-4'}>
                Title:
                <input
                    type="text"
                    {...register("title")}
                    className='border p-2 w-full'
                />
                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
            </label>
            <label className={'flex gap-4'}>
                Description:
                <textarea
                    {...register("description")}
                    className='border p-2 w-full'
                />
                {errors.description && <span className="text-red-500">{errors.description.message}</span>}
            </label>
            <label className={'flex gap-4'}>
                Status:
                <select
                    className={'border px-4 py-2'}
                    {...register("status")}
                >
                    {statusList.map((statusOption, index) => (
                        <option key={index} value={statusOption}>
                            {statusOption}
                        </option>
                    ))}
                </select>
            </label>
            <Button typeButton={task ? "save" : "add-new"} />
        </form>
    );
}

export default TaskForm;
