'use client'
import React, { useEffect, useState } from 'react';
import EditForm from '@/components/form/task/edit';
import { getTaskById, updateTask } from '@/hooks/taskController';

interface EditTaskPageProps {
    id: number;
}

const EditTaskPage: React.FC<EditTaskPageProps> = (props: {id: number}) => {
    const [task, setTask] = useState<null>(null);
    const id = props.params.id;

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const fetchedTask = await getTaskById(id);
                console.log(id);

                setTask(fetchedTask);
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [id]);

    const handleSave = async (updatedTask) => {
        // Wywołujemy funkcję updateTask do zapisania zaktualizowanych danych
        try {
            console.log('Task updated successfully!');
            await updateTask(updatedTask);

        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <>
            {task && <EditForm task={task} taskId={id} onSave={handleSave} />}
        </>
    );
};

export default EditTaskPage;
