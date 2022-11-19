import Link from 'next/link';


export default function Me() {
    return (
      <div>
      <h1> Welcome to Me </h1>
        <h2 className="title">
            Go <Link href="/">Home</Link>
        </h2>
      </div>
    )
  }