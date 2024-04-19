// components/Layout.tsx
import { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css'

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {

    return (
        <html>
            <body className="flex flex-wrap">
                <Header/>
                    <main className={'inline-flex w-full py-10 lg:w-5/6 px-6 lg:h-full'}>
                        {children}
                    </main>
                <Footer />
            </body>
        </html>
    );
};

export default Layout;