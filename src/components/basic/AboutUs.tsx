
import { FaCircleCheck } from "react-icons/fa6";
import { ContainerWrapper } from "../../wrapper/UserWrapper";


function AboutUs() {
    return (
        <ContainerWrapper className="pt-32" id="about">
            <div className="w-full grid grid-cols-1  md:grid-cols-2 gap-10">
                <div className="p-4">
                    <img src="/images/car.png" alt="" />
                </div>
                <div className="flex gap-5 flex-col">
                    <h1 className="font-bold text-blue-900  text-2xl">ABOUT US</h1>
                    <h1 className="font-extrabold text-5xl ">We Provide Trusted <span className="text-blue-900">Cab Service</span> In India</h1>
                    <p className="text-gray-700 font-normal leading-8 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex justify-start items-center gap-4"><FaCircleCheck size={20} className="text-blue-900" /> <span className="font-bold text-gray-800">At vero eos et accusamus et iusto odio.</span></li>
                        <li className="flex justify-start items-center gap-4"><FaCircleCheck size={20} className="text-blue-900" /> <span className="font-bold text-gray-800">At vero eos et accusamus et iusto odio.</span></li>
                        <li className="flex justify-start items-center gap-4"><FaCircleCheck size={20} className="text-blue-900" /> <span className="font-bold text-gray-800">At vero eos et accusamus et iusto odio.</span></li>
                        <li className="flex justify-start items-center gap-4"><FaCircleCheck size={20} className="text-blue-900" /> <span className="font-bold text-gray-800">At vero eos et accusamus et iusto odio.</span></li>
                    </ul>
                </div>
            </div>
        </ContainerWrapper>
    )
}
export default AboutUs