'use client'
import Link from "next/link";
import Button from '@/components/buttons/button';

const TaskList = [
    {
        'id': '1',
        'title': 'task 1',
        'description': 'Opis zadania numer 1',
        'status': 'finished'
    },
    {
        'id': '4',
        'title': 'task 2',
        'description': 'Opis zadania numer 2',
        'status': 'pending'
    },
    {
        'id': '10',
        'title': 'task 3',
        'description': 'Opis zadania numer 3',
        'status': 'new'
    }
]

export default function App() {
    return (
        <>
            <div className={'flex cursor-pointer flex-col p-4 border w-full'}>
                {
                    TaskList.map((navElement, index) => (
                        <div className={'flex p-4 justify-between'} key={index} title={navElement.title}>
                            <div>{navElement.title}</div>
                            <div>{navElement.description}</div>
                            <div>{navElement.status}</div>
                            <Button type={'remove'} idParam={navElement.id}/>
                            <Button type={'edit'} idParam={navElement.id}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
}