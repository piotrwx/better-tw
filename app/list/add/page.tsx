'use client';
import React from 'react';
import { createTask, Task } from "@/hooks/taskController";
import TaskForm from "@/components/form/task/taskForm";

const AddTaskForm: React.FC = () => {
    const handleSave = async (newTask: Task) => {
        try {
            await createTask(newTask);
            console.log("Task added successfully!");
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <TaskForm onSave={handleSave} />
    );
};

export default AddTaskForm;
