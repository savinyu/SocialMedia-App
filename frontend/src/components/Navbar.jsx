import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [lightmode,setLightMode] = useState(true);
    const [isOpen,setIsOpen]= useState(false);
    const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-gray-500 w-full text-white h-12 pt-2 px-2">
        <div className="flex justify-start ml-5 font-bold text-xl select-none cursor-pointer"
            onClick={()=>{navigate('/')}}
        >
            FreeWorld
        </div>
        <div className="">
            <input className="hidden md:block rounded bg-slate-300 text-black p-1 w-60 pl-2 focus:outline-none" type="text" placeholder="Search" />
        </div>
        <div className="hidden xl:block w-80 mr-2 ">
            <div className="flex justify-between">
                <button
                    onClick={()=>{setLightMode(!lightmode)}}
                >
                    {lightmode?(
                        <img className="w-8 h-8" src="/images/light.svg" alt="light" />
                    ):(
                        <img className="w-8 h-8" src="/images/dark.svg" alt="dark" />
                    )}
                </button>
                <button>Comments</button>
                <button >Notifications</button>
                <button>Help</button>
                <button>Log Out</button>
            </div>
        </div>
        <div className="xl:hidden relative inline-block text-left">
            <div className="flex justify-center">
                <button
                    onClick={()=>{setIsOpen(!isOpen)}}
                >
                    <img className="w-8 h-6" src="/images/dropdown.svg" alt="dropdown" />
                </button>
            </div>
            {isOpen && 
                <div className={`origin-top-right absolute right-0 mt-4 w-40  rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-150 ${
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    role="menu"
                    aria-orientation="horizontal"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        <a 
                            href="#" 
                            className="text-gray-700 block  pl-6 py-2 text-sm hover:bg-gray-100"
                            role="menu-item"
                            onClick={()=>{setLightMode(!lightmode)}}>
                            {lightmode?(
                                <img className="w-7 h-6" src="/images/light.svg" alt="light" />
                            ):(
                                <img className="w-7 h-6" src="/images/dark.svg" alt="dark" />
                            )}
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menu-item">
                            Comments
                        </a><a 
                            href="#" 
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menu-item">
                            Notification
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menu-item">
                            Help 
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menu-item">
                            Logout
                        </a>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Navbar