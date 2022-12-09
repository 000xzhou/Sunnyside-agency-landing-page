import { useState } from "react"
function Nav() {
    const [show, setshow] = useState("hidden")
    function handleToggleVisibility() {
        if (show === "hidden") {
            setshow("block")
        } else {
            setshow("hidden")
        }
    }
    return (
        <div className=" text-slate-50 bg-orange-blue py-5">
            <div className="px-4 flex justify-between">
                <div className="text-4xl" ><img src="images/logo.svg" alt="logo" /></div>
                <button onClick={handleToggleVisibility}><div className="toggle md:hidden" aria-aria-label="menu"><img src="images/icon-hamburger.svg" alt="menu" /></div></button>
                < nav className={`absolute mx-auto w-11/12 inset-x-0 top-24 md:top-0 md:inset-0 md:block md:mx-0 md:w-auto bg-slate-50 md:bg-transparent text-black md:relative bubble" aria-label="primary navigation ${show}`}>
                    <ul className="text-center flex flex-col px-20 py-10 md:px-0 md:py-0 md:flex-row md:space-x-5 md:items-center">
                        <li className="pb-3 md:pb-0"><a href="#">About</a></li>
                        <li className="py-3 md:py-0"><a href="#">Services</a></li>
                        <li className="py-3 md:py-0"><a href="#">Projects</a></li>
                        <li className="md:bg-white bg-yellow-400 text-black uppercase py-2 px-5 rounded-full" ><a href="#">contact</a></li>
                    </ul>
                </nav>

            </div>
        </div >
    )
}

export default Nav
