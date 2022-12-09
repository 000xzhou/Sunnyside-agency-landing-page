
function Testimonials() {
    return (
        <div className="text-center px-10 m-auto">
            <h3 className="text-lg md:text-3xl tracking-widest uppercase font-fraunces font-black py-20">Client Testimonials</h3>
            <div className="flex flex-col gap-4 md:flex-row container mx-auto">
                <div className="w-full md:w-1/4 flex flex-col m-auto">
                    <img className="rounded-full place-self-center" src="images/image-emily.jpg" alt="person one" />
                    <p className="leading-loose py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus quis distinctio repellendus beatae facere. Ipsam nobis asperiores vel.</p>
                    <p className="font-fraunces font-black text-lg">Emily R.</p>
                    <p>Marketing Director</p>
                </div>
                <div className="flex flex-col w-full pt-20 md:pt-0 md:w-1/4 m-auto">
                    <img className="rounded-full place-self-center" src="images/image-thomas.jpg" alt="person one" />
                    <p className="leading-loose py-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus quis distinctio repellendus beatae facere. Ipsam nobis asperiores vel.</p>
                    <p className="font-fraunces font-black">Thomas S.</p>
                    <p>Chief Operating Officer</p>
                </div>
                <div className="flex flex-col w-full md:w-1/4 py-20 m-auto">
                    <img className="rounded-full place-self-center" src="images/image-jennie.jpg" alt="person one" />
                    <p className="leading-loose py-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus quis distinctio repellendus beatae facere. Ipsam nobis asperiores vel.</p>
                    <p className="font-fraunces font-black">Jeenie F.</p>
                    <p>Business Owner</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
