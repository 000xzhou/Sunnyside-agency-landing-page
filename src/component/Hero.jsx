
function Hero() {
    return (
        <div className="grid overflow-hidden grid-cols-1 auto-rows-fr lg:grid-cols-2 lg:grid-rows-4 ">
            <div className="bg-image-header box col-span-2 bg-no-repeat bg-cover bg-center h-[90vh]">
                <h1>We are creatives</h1>
            </div>
            <div className=" box  lg:col-start-2 lg:col-end-3 bg-image-transform bg-no-repeat bg-cover bg-center">
            </div>
            <div className=" box lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2">
                <div>
                    <h2>Transform</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, asperiores et, molestias pariatur, ipsa exercitationem esse doloribus alias expedita aliquid debitis deserunt nobis nam quam porro sapiente odio doloremque veritatis?</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className=" box bg-image-stand-out bg-no-repeat bg-cover bg-center ">
            </div>
            <div className=" box">
                <div >
                    <h2>Transform</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, asperiores et, molestias pariatur, ipsa exercitationem esse doloribus alias expedita aliquid debitis deserunt nobis nam quam porro sapiente odio doloremque veritatis?</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className=" box">
                <div className="bg-image-graphic-design bg-no-repeat bg-cover bg-center h-full">
                    <h2>Transform</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, asperiores et, molestias pariatur, ipsa exercitationem esse doloribus alias expedita aliquid debitis deserunt nobis nam quam porro sapiente odio doloremque veritatis?</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className=" box">
                <div className="bg-image-photography bg-no-repeat bg-cover bg-center h-full">
                    <h2>Transform</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, asperiores et, molestias pariatur, ipsa exercitationem esse doloribus alias expedita aliquid debitis deserunt nobis nam quam porro sapiente odio doloremque veritatis?</p>
                    <button>Learn More</button>
                </div>
            </div>

        </div>
    )
}

export default Hero
