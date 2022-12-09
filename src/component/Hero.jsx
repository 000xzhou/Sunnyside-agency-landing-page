
function Hero() {
    return (
        <div className="text-center grid overflow-hidden grid-cols-1 auto-rows-fr md:grid-cols-2 md:grid-rows-4  ">
            <div className="bg-image-header box col-span-2 bg-no-repeat bg-cover bg-center h-screen md:h-[90vh]">
                <h1 className="font-fraunces uppercase tracking-wide text-5xl text-slate-50 text-center pt-36">We are creatives</h1>
                <div className="flex flex-col pt-10 md:pt-20 lg:pt-48"><img className="place-self-center" src="images/icon-arrow-down.svg" alt="arrow-down" /></div>
            </div>
            <div className="row-start-2 md:col-start-2 md:col-end-3 bg-image-transform bg-no-repeat bg-cover bg-center">
            </div>
            <div className="row-start-3 flex h-screen md:h-full md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2 ">
                <div className="px-10 md:px-32 md:text-left m-auto">
                    <h2 className="text-5xl font-black font-fraunces ">Transform your brand</h2>
                    <p className="text-lg py-10 leading-loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, asperiores et, molestias pariatur, ipsa exercitationem esse doloribus alias expedita aliquid debitis deserunt nobis nam quam porro sapiente odio doloremque veritatis?</p>
                    <button className="text-lg font-fraunces uppercase ">Learn More</button>
                </div>
            </div>
            <div className="row-start-4 md:row-start-3 bg-image-stand-out bg-no-repeat md:bg-cover bg-center ">
            </div>
            <div className="row-start-5 flex h-screen md:h-full md:row-start-3">
                <div className="px-10 md:px-32 md:text-left  m-auto">
                    <h2 className="text-5xl font-black font-fraunces">Stand out to the right audience</h2>
                    <p className="text-lg py-10 leading-loose" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, asperiores et, molestias pariatur, ipsa exercitationem esse doloribus alias expedita aliquid debitis deserunt nobis nam quam porro sapiente odio doloremque veritatis?</p>
                    <button className="text-lg font-fraunces uppercase ">Learn More</button>
                </div>
            </div>
            <div className="row-start-6  md:row-start-4 ">
                <div className="flex  h-screen md:h-full px-10 md:px-48 bg-image-graphic-design bg-no-repeat bg-cover bg-center">
                    <div className="self-end md:py-10">
                        <h2 className="text-5xl font-black font-fraunces">Graphic Design</h2>
                        <p className="text-lg py-10 leading-loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, asperiores et, molestias pariatur, ipsa exercitationem esse doloribus alias expedita aliquid?</p>
                    </div>
                </div>
            </div>
            <div className="row-start-7 md:row-start-4 ">
                <div className="flex  h-screen md:h-full px-10 md:px-48 bg-image-photography bg-no-repeat bg-cover bg-center">
                    <div className="self-end md:py-10">
                        <h2 className="text-5xl font-black font-fraunces">Photography</h2>
                        <p className="text-lg py-10 leading-loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, asperiores et, molestias pariatur, ipsa exercitationem esse doloribus alias expedita aliquid?</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
