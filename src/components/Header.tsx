import { useEffect } from 'react'
import logoWhite from '/ntwist-logo-light.png'

export default function Header({ inView }: { inView: boolean }) {
    useEffect(() => console.log(inView), [inView])

    return (
        <header
            className={
                ' w-full max-w-[96rem] transition fixed top-0 z-10 ' +
                (!inView ? ' bg-slate-600/50 backdrop-blur' : '')
            }>
            <div className=" w-full flex items-center justify-between px-4 py-2">
                <img src={logoWhite} alt="ntwist logo" className=" w-40 h-auto" />
                <nav className=" p-2 hidden md:contents">
                    <ul className=" flex items-center justify-evenly gap-4 text-lg font-medium">
                        <li>
                            <a href="https://ntwist.com/">Home</a>
                        </li>
                        <li>Industries</li>
                        <li>
                            <a href="https://ntwist.com/ai-software/">AI Software</a>
                        </li>
                        <li>
                            <a href="https://ntwist.com/blog/">Blog</a>
                        </li>
                        <li>
                            <a href="https://ntwist.com/contact-us/">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
