import Head from 'next/head'
import Link from 'next/link';

export default function Header() {
    return (
    <Head>
    <title>Robert Pether: React Developer Personal Website</title>
    {/* meta tags */}
    <meta name="author" content="Robert Pether" />
    <meta
    name="description"
    content="Robert Pether React Developer Personal Website" />
    <meta 
    name="keywords" content="React Next Node MongoDB Azure AWS Flask 
    CV Robert Pether Junior Front-End Developer Personal Website "/>
    <meta 
    name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* links & APIs */}
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
    </Head>
    )
}