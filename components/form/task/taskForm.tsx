'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from "@/components/buttons/button";
import { Task } from "@/hooks/taskController";

interface TaskFormProps {
    task?: Task;
    onSave: (task: Task) => void;
}

interface TaskFormInputs {
    title: string;
    description: string;
    status: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSave }) => {
    const statusList = ['new', 'pending', 'finished'];

    const { register, handleSubmit, reset, setValue } = useForm<TaskFormInputs>({
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

    React.useEffect(() => {
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
                    {...register("title", { required: true })}
                    className='border'
                />
            </label>
            <label className={'flex gap-4'}>
                Description:
                <textarea
                    {...register("description", { required: true })}
                    className='border'
                />
            </label>
            <label className={'flex gap-4'}>
                Status:
                <select
                    className={'border px-4 py-2'}
                    {...register("status", { required: true })}
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
