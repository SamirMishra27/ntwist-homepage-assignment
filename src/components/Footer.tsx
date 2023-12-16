import logoWhite from '/ntwist-logo-light.png'
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
    const footerLinks = [
        { name: 'Home', link: 'https://ntwist.com/' },
        { name: 'About Us', link: 'https://ntwist.com/about-us' },
        { name: 'Contact Us', link: 'https://ntwist.com/contact-us' },
        { name: 'Privacy Policy', link: 'https://ntwist.com/privacy-policy' },
        { name: 'Sitemap', link: 'https://ntwist.com/sitemap' }
    ]

    return (
        <footer className=" w-full bg-slate-900 py-8 flex items-center justify-center">
            <div className=" w-full max-w-4xl flex flex-col items-center justify-evenly gap-4 py-8">
                <img src={logoWhite} alt="ntwist logo" className=" w-40 h-auto" />
                <nav>
                    <ul className=" flex items-center justify-evenly gap-6 text-white text-base">
                        {footerLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <p className=" text-slate-500">9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
                <nav>
                    <ul className=" flex items-center justify-evenly gap-4">
                        <li className=" p-3 hover:bg-slate-600 transition rounded-lg">
                            <a
                                href="https://twitter.com/IncNtwist"
                                target="_blank"
                                rel="noreferrer">
                                <FaXTwitter className=" fill-slate-300 w-6 h-auto" />
                            </a>
                        </li>
                        <li className=" p-3 hover:bg-slate-600 transition rounded-lg">
                            <a
                                href="https://www.linkedin.com/company/ntwist"
                                target="_blank"
                                rel="noreferrer">
                                <FaLinkedin className=" fill-slate-300 w-6 h-auto" />
                            </a>
                        </li>
                    </ul>
                </nav>
                <p className="text-slate-500">© 2022. Ntwist Inc.</p>
            </div>
        </footer>
    )
}
