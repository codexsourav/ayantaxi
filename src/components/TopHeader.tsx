import { ReactNode } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";


function TopHeader() {
    return (
        <>
            <div className=" w-full h-20 bg-white hidden md:block ">
                <div className="flex justify-between items-center gap-5 m-auto max-w-[1400px] px-10 h-full">
                    <div className="flex justify-center items-center">
                        <img src="/images/logo.png" alt="logo" className="h-20" />
                    </div>
                    <div className=" flex justify-center items-center gap-6">
                        <TopBox
                            link="tel: +91 9971474015"
                            icon={<FaPhoneAlt className="text-blue-950" size={12} />}
                            text=" +91 9971474015"
                        />

                        <TopBox
                            link="mailto: ayantaxiservice@gmail.com"
                            icon={<MdEmail className="text-blue-950" size={12} />}
                            text=" ayantaxiservice@gmail.com"
                        />
                    </div>
                </div>

            </div >
            <div className=" w-full h-14 md:h-20 flex justify-between items-center p-5 md:px-10 md:hidden">
                <MobileTopBox text=" +91 9971474015"
                    link="tel: +91 9971474015"
                    icon={<FaPhoneAlt className="text-blue-950" size={12} />}
                />
                <MobileTopBox text=" ayantaxiservice@gmail.com"
                    link="mailto: ayantaxiservice@gmail.com"
                    icon={<MdEmail className="text-blue-950" size={12} />}
                />

            </div>
        </>
    )
}
export default TopHeader;


function TopBox({ icon, text, link }: { text: string, icon: ReactNode, link: string }) {
    return (
        <a href={link} className="logo h-full  items-center gap-3 flex">
            <div className=" justify-center items-center hidden lg:flex">
                <div className="border-2 border-blue-950 w-8 h-8 flex justify-center items-center rounded-full">
                    {icon}
                </div>
            </div>
            <p className="font-bold text-blue-950 text-sm">{text}</p>
        </a >
    )
}



function MobileTopBox({ text, icon, link }: { text: string, icon: ReactNode, link: string, }) {
    return (
        <a href={link} className="logo h-full flex  items-center gap-3">
            <div className=" justify-center items-center sm:flex hidden">
                <div className="border-2 border-blue-950 w-8 h-8 flex justify-center items-center rounded-full">
                    {icon}
                </div>
            </div>
            <p className="font-bold text-blue-950 text-[12px] md:font-[10px]">{text}</p>
        </a >
    )
}