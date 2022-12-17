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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    />
    </Head>
    )
}