import Image from 'next/image'
import Link from 'next/link'

function Home() {
    return (
        <header className={'header'}>
            <link href="/css/about.css" rel="stylesheet" />
            <nav className={'aboutheaders'}>
                <li className={'logoheader'}>
                    <Image src="/img/logo.png" alt="Picture of the author" width={100} height={50} />
                </li>
                <li className={'navheaders'}>
                    <Link href="/"><a>首页</a></Link>
                    <Link href="/about"><a>菜单一</a></Link>
                    <Link href="/"><a>菜单二</a></Link>
                    <Link href="/"><a>菜单三</a></Link>
                    <Link href="/"><a>菜单四</a></Link>
                    <Link href="/"><a>菜单五</a></Link>
                    <Link href="/"><a>菜单六</a></Link>
                    <Link href="/"><a>菜单七</a></Link>
                    <Link href="/"><a>菜单八</a></Link>
                    <Link href="/"><a>菜单九</a></Link>
                </li>
                <li className={'autherheader'}>
                    <Image src="/img/author.png" alt="Picture of the author" width={50} height={50} />
                    <p>Admin</p>
                </li>
            </nav>
        </header>
    )
}

export default Home