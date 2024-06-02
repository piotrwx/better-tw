'use client'
import React, { useEffect, useState } from 'react';
import TaskForm from '@/components/form/task/taskForm';
import { getTaskById, updateTask, Task } from '@/hooks/taskController';

interface EditTaskPageProps {
    params: {
        id: number;
    };
}

const EditTaskPage: React.FC<EditTaskPageProps> = ({ params }) => {
    const [task, setTask] = useState<Task | null>(null);
    const id = params.id;

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const fetchedTask = await getTaskById(id);
                setTask(fetchedTask);
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [id]);

    const handleSave = async (updatedTask: Task) => {
        try {
            await updateTask(updatedTask);
            console.log('Task updated successfully!');
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <>
            {task && <TaskForm task={task} onSave={handleSave} />}
        </>
    );
};

export default EditTaskPage;
