
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { scrollToElement } from "../../utils/helper";
import { ContainerWrapper } from "../../wrapper/UserWrapper";


function CallSection() {
    return (
        <div className="flex flex-col justify-between">



            <ContainerWrapper className="grid md:grid-cols-5 grid-cols-1 py-10 md:h-80 w-full relative">
                {/* Background overlay image with blue overlay */}
                <div className="absolute inset-0" style={{ backgroundImage: "url('/images/contact.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "rgba(0, 0, 255, 0.4)" }}></div>

                <div className="col-span-3 flex justify-center items-center flex-col gap-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white ">Book Your Cab It's Simple And Affordable</h1>
                    <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using is that it has normal distribution of letters.</p>
                </div>

                <div className="col-span-2 flex justify-center w-full md:items-end items-center gap-9 flex-col md:mt-10 mt-10 relative z-10">
                    <div className="flex md:justify-end md:items-end justify-center items-center w-full">
                        <div className="flex justify-center items-center text-4xl font-4xl font-extrabold gap-7 text-white">
                            <MdOutlineSupportAgent />
                            <span>+91 9971474015</span>
                        </div>
                    </div>
                    <p onClick={() => scrollToElement("book")} className="h-14 rounded-full font-bold w-48 gap-5 uppercase bg-white hover:bg-gray-950 transition-all flex justify-center items-center text-blue-800 hover:text-white"> Book A Cab <FaArrowRightLong /></p>
                </div>
            </ContainerWrapper>

        </div>
    );
}

export default CallSection