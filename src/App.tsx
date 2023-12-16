import { FeatureBlock, Footer, Header, ReadMoreButton } from './components'
import { useInView } from 'react-intersection-observer'

import featureIcons from '/home-image-icons-v6.png'
import illustration1 from '/illustration-1.jpg'
import illustration2 from '/illustration-2.jpg'
import illustration3 from '/illustration-3.jpg'
import illustration4 from '/illustration-4.png'

export default function App() {
    const { ref: featureRef, inView } = useInView({ threshold: 1 })

    return (
        <>
            <div className=" invisible" ref={featureRef} />
            <Header inView={inView} />
            <main className=" w-full max-w-[96rem] flex flex-col items-center justify-evenly">
                <section className=" w-full h-auto md:h-screen flex flex-col lg:flex-row items-center justify-evenly lg:justify-between px-4 bg-[url('/hero-background.png')] bg-cover bg-no-repeat pt-20 md:pt-40">
                    <div className=" flex flex-col items-start justify-evenly gap-6 text-white p-4">
                        <h1 className=" font-bold text-5xl text-left md:text-justify max-w-xl">
                            Data-powered solutions for Industrial Excellence
                        </h1>
                        <button className=" px-10 py-2 rounded font-medium text-white bg-blue-500 hover:bg-blue-500/90 transition">
                            Read More
                        </button>
                    </div>
                    <img src={featureIcons} alt="" className=" max-w-2xl w-full" />
                </section>
                <FeatureBlock className=" md:flex-row">
                    <div>
                        <h1>Mine-To-Mill-To-Mine Optimization</h1>
                        <p>
                            {`NTWIST's newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.`}
                        </p>
                        <ReadMoreButton
                            link="https://ntwist.com/mine-to-mill-to-mine-optimization/"
                            text="Read More"
                        />
                    </div>
                    <div>
                        <img src={illustration1} alt="Mine" />
                    </div>
                </FeatureBlock>

                <FeatureBlock className=" md:flex-row-reverse">
                    <div>
                        <h1>Sustainability</h1>
                        <p>
                            Environmental stewardship is a priority for NTWIST. We help our
                            customers to minimize their sustainability impact on the planet.
                            Emissions or environmental targets are used alongside productivity
                            targets to define success for our customers. With the increasing
                            relevance of carbon accounting and emissions tracking, NTWIST offers a
                            suite of tools to increase visibility into environmental performance and
                            help processing plants track, manage, optimize, and report key metrics.
                        </p>
                        <ReadMoreButton
                            link="https://ntwist.com/project/sustainability-assistant/"
                            text="Read More"
                        />
                    </div>
                    <div>
                        <img src={illustration2} alt="Internet of Things" />
                    </div>
                </FeatureBlock>

                <FeatureBlock className=" md:flex-row">
                    <div>
                        <h1>Mineral Processing</h1>
                        <p>
                            NTWIST offers a number of solutions for mills, concentrators, and leach
                            plants. Our solutions help operations to reduce the effect of feed
                            variability, avoid downtime and increase peak throughput while
                            decreasing energy and reagent consumption.
                        </p>
                        <ReadMoreButton link="https://ntwist.com/metal-mining/" text="Read More" />
                    </div>
                    <div>
                        <img src={illustration3} alt="Extraction" />
                    </div>
                </FeatureBlock>

                <FeatureBlock className=" md:flex-row-reverse">
                    <div>
                        <h1>Oil & Gas</h1>
                        <p>
                            Oil and Gas plants require a high level of control and robustness in
                            their operation due to the high risks to people and environment. NTWIST
                            helps Oil & Gas customers to analyze historical data, identify
                            opportunities for process control improvements, and reduce variability
                            in any part of the process, thus providing enhanced reliability and
                            safety.
                        </p>
                        <ReadMoreButton link="https://ntwist.com/metal-mining/" text="Read More" />
                    </div>
                    <div>
                        <img src={illustration4} alt="Oil and gas refinery" />
                    </div>
                </FeatureBlock>
            </main>
            <Footer />
        </>
    )
}
