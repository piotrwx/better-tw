'use client';

interface Array {
    id: number
    title: string
    description: string
    status: string
}

export async function useListData() {
    try {
        const res = await fetch(`http://localhost:8000/task_list`);
        const data = await res.json();
        // Assuming `data` is an array containing objects with `id`, `title`, `description`, and `status` properties
        return data;
    } catch (err) {
        console.error("Error fetching data:", err);
        return []; // Return an empty array in case of error
    }
}