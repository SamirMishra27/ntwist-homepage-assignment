import { PropsWithChildren, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function FeatureBlock({
    className,
    children
}: PropsWithChildren<{ className: string }>) {
    const { ref, inView, entry } = useInView({ threshold: 0 })

    useEffect(() => {
        if (entry && inView) {
            entry.target.classList.add('opacity-100')
            entry.target.classList.add('translate-y-0')

            entry.target.classList.remove('opacity-0')
            entry.target.classList.remove('translate-y-40')
        }
    }, [inView])

    return (
        <section
            className={
                ' feature-block w-full max-w-[96rem] flex items-center justify-between transition duration-700 ' +
                ' text-black px-4 py-16 gap-6 flex-col opacity-0 translate-y-40 ' +
                className
            }
            ref={ref}>
            {children}
        </section>
    )
}
