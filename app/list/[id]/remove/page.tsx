'use client'
import React, { useEffect } from 'react';
import { removeTaskById } from '@/hooks/taskController';

interface RemoveTaskProps {
    id: number;
}

const RemoveTask: React.FC<RemoveTaskProps> = (props: {id: number}) => {
    const id = props.params.id;

    useEffect(() => {

        const handleRemove = async () => {
            try {
                console.log('Removing task with ID:', id);
                await removeTaskById(id);
                console.log('Task removed successfully!');
            } catch (error) {
                console.error('Error removing task:', error);
            }
        };

        // Call handleRemove when the component mounts
        handleRemove();
    }, [id]); // Call handleRemove whenever the id changes

    // No need to return anything since the removal happens automatically
    return null;
};

export default RemoveTask;
