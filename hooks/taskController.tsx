import { useListData } from "@/hooks/useListData";

export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}

export interface ListDataResponse {
    data: Task[];
}

export const removeTaskById = async (taskId: string): Promise<void> => {
    try {
        // Update the list on the server
        await removeTaskListOnServer(taskId);
    } catch (error) {
        console.error("Error removing task:", error);
        throw error;
    }
};

export const getTaskById = async (taskId: string): Promise<Task | undefined> => {
    try {
        const listData: ListDataResponse = await useListData();
        const taskList: Task[] = Object.values(listData);
        return taskList.find(task => task.id === taskId);
    } catch (error) {
        console.error("Error fetching task by ID:", error);
        throw error;
    }
};

export const getAllTasks = async (): Promise<Task[]> => {
    try {
        const listData: ListDataResponse = await useListData();
        return  Object.values(listData) || [];
    } catch (error) {
        console.error("Error fetching all tasks:", error);
        throw error;
    }
};

export const updateTask = async (updatedTask: Task): Promise<void> => {
    try {
        // Fetch the current list of tasks
        const listData: ListDataResponse = await useListData();
        const taskList: Task[] = Object.values(listData) || [];

        const index = taskList.findIndex(task => task.id === updatedTask.id);
        taskList[index] = updatedTask

        if (index !== -1) {
            taskList[index] = updatedTask;
            await updateTaskListOnServer(taskList[index], updatedTask.id);
        } else {
            throw new Error(`Task with id ${updatedTask.id} not found.`);
        }
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
};

export const createTask = async (formData: Task[]): Promise<void> => {

    try {
        await fetch(`http://localhost:8000/task_list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(() => {
            window.location.href = '/list';
        });
    } catch (error) {
        console.error("Error updating task list on server:", error);
        throw error;
    }
};

// Helper function to update the task list on the server
const removeTaskListOnServer = async (id: string): Promise<void> => {

    try {
        // Update the list on the server
        await fetch(`http://localhost:8000/task_list/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(() => {
            window.location.href = '/list';
        });
    } catch (error) {
        console.error("Error updating task list on server:", error);
        throw error;
    }
};

const updateTaskListOnServer = async (updatedTaskList: Task[], id: string): Promise<void> => {

    console.log('updatedTaskList final', updatedTaskList)
    try {
        // Update the list on the server
        await fetch(`http://localhost:8000/task_list/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTaskList),
        }).then(() => {
            window.location.href = '/list';
        });
    } catch (error) {
        console.error("Error updating task list on server:", error);
        throw error;
    }
};