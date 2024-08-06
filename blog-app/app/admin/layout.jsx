import { assets } from "@/Assets/assets";
import Sidebar from "@/components/adminComponent/Sidebar";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark"/>
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <RxAvatar width={40} className="w-10 h-12" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
