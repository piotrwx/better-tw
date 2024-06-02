'use client'
import Link from 'next/link'

const navigationListArray = [
    {
        'name': 'Homepage',
        'link': '/',
        'title': ''
    },
    {
        'name': 'Task list',
        'link': '/list',
        'title': ''
    }]


const NavigationBar = () => {
    return <>
        <nav>
            <ul className={'flex cursor-pointer flex-col'}>
                {
                    navigationListArray.map((navElement, index) => (
                        <li className={'p-2 text-xl border-b last:border-0'} key={index}>
                            <Link href={navElement.link} title={navElement.title}>{navElement.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </>;
};

export default NavigationBar;