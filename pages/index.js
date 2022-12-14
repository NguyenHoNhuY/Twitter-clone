import Sidebar from '@/components/Sidebar/Sidebar';
import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Twitter Clone</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='mx-auto flex min-h-screen max-w-7xl'>
                {/*  Sidebar  */}
                <Sidebar />
            </main>
        </div>
    );
}
