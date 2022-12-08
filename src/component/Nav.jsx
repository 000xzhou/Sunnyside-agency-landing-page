
function Nav() {
    return (
        <div className="flex justify-between">
            <div>sunnyside</div>
            <div className="toggle"><button></button></div>
            <nav className="footer-nav" aria-label="primary navigation">
                <ul className="flex space-x-5">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
