import Head from 'next/head'
import Link from 'next/link';


export default function Home() {
  return (
    <div>
    <Head>
      <title>Robert Pether Project Web Application</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="title">
      Read <Link href="/about/me">Get to Know Me</Link>
    </h1>
    <h1 className="title">
      Read <Link href="/about/projects">All Projects</Link>
    </h1>
  </div>
  )
}
