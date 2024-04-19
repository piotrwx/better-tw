'use client'
import Link from 'next/link'
const logoObject =
    {
        'name': 'Homepage',
        'src': 'next.svg',
        'alt': ''
    }

const Logo = () => {
    return (
        <div className={'lg:p-10'}>
            <img className={'m-auto w-2/3 sm:w-1/2 lg:w-full'} src={logoObject.src} alt={logoObject.alt}/>
        </div>
    )
};

export default Logo;