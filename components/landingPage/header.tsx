import Head from "next/head";

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
    </Head>
    )
}