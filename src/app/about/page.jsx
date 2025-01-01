import Image from "next/image"

import imageSrc from "../../../public/cloud-hosting.png"

const AboutPage = () => {
    return (
        <>
            <div style={{ backgroundColor: "#efefef" }} className="fix-height flex flex-col items-center justify-center">
                <h1 className="font-bold text-3xl" >About This App</h1>
                <p className=" text-sm text-gray-800 text-center mt-2">
                    The best web hosting solution for your online success

                </p>
                <div>
                    <Image src={imageSrc} width={400} height={500} alt="cloud" />
                </div>
            </div>
        </>
    )
}

export default AboutPage