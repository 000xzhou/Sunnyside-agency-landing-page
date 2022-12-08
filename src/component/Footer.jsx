
function Footer() {
    return (
        <footer >
            <div className="img-1"></div>
            <div className="img-2"></div>
            <div className="img-3"></div>
            <div className="img-4"></div>
            <div>
                <div>sunnyside</div>
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
