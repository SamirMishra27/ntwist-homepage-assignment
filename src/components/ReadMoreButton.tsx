export default function ReadMoreButton({ link, text }: { link: string; text: string }) {
    return (
        <a
            href={link}
            target="_blank"
            className=" px-6 py-3 rounded font-medium text-white bg-feature-orange hover:bg-feature-orange/90 transition"
            aria-label={text}
            rel="noreferrer">
            {text}
        </a>
    )
}
