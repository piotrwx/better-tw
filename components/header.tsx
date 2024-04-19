'use client'
import { useState } from "react";
import Link from 'next/link'
import NavigationBar from '@/components/header/navigation'
import Logo from '@/components/header/logo'

const navigationListObject = [
    {
        'name': 'Homepage',
        'link': '/',
        'alt': ''
    },
    {
        'name': 'Task list',
        'link': '/list',
        'alt': ''
    }
]

const Header = () => {

    let [show, setShow] = useState(false);

    return (
        <header
            className={
                'duration-1000 ' +
                `${show ? 'lg:-translate-x-full lg:w-0' : 'lg:translate-x-0 lg:w-1/6'}`
            }
        >
            <div id={'nav-toggle'}
                 onClick={
                     () => setShow(!show)
                 }
                 className={'opacity-2 h-6 w-6 fixed top-4 left-4 bg-amber-950 z-10'}>
            </div>

            <div
                className={
                    'inline-flex flex-col p-4 w-full fixed duration-1000 ' +
                    'lg:static lg:translate-x-0 lg:py-10 h-full lg:min-h-screen bg-orange-500' +
                    ` ${show ? 'translate-x-0  lg:p-0 lg:opacity-0' : '-translate-x-full'}`
                }
            >
                <Logo/>
                <NavigationBar/>
            </div>
        </header>
    )
};

export default Header;