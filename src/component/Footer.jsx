
function Footer() {
    return (
        <footer className="h-screen md:h-screen/2">
            <div className=" grid grid-cols-2 grid-rows-2 w-full h-2/3 md:grid-cols-4 md:grid-rows-1">
                <div className="bg-img-1 bg-no-repeat bg-cover bg-center"></div>
                <div className="bg-img-2 bg-no-repeat bg-cover bg-center"></div>
                <div className="bg-img-3 bg-no-repeat bg-cover bg-center"></div>
                <div className="bg-img-4 bg-no-repeat bg-cover bg-center"></div>
            </div>
            <div className="bg-cherry-green h-1/3 flex flex-col justify-evenly items-center">
                <div><img src="images/logo.svg" alt="logo" /></div>
                <nav aria-label="secondary navigation">
                    <ul className="flex space-x-5">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </nav>
                <div className="soical">
                    <ul className="flex space-x-5">
                        <li><a href="#"><img src="images/icon-facebook.svg" alt="" /><span className="hidden">facebook</span></a></li>
                        <li><a href="#"><img src="images/icon-instagram.svg" alt="" /><span className="hidden">instagram</span></a></li>
                        <li><a href="#"><img src="images/icon-twitter.svg" alt="" /><span className="hidden">twitter</span></a></li>
                        <li><a href="#"><img src="images/icon-pinterest.svg" alt="" /><span className="hidden">pinterest</span></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
