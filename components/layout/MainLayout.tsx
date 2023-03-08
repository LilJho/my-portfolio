import Image from "next/image";
export default function MainLayout({ children }) {
  return (
    <div className="w-screen h-screen">
      <div className="w-[500px] h-[500px] bg-gradient-to-br from-[#ECBD00] to-black absolute ">
        <div className="bg-[#F9F9F9] w-[480px] h-[480px] relative top-[20px] left-[20px]"></div>
      </div>
      {children}
      <div className="w-[500px] h-[500px] bg-gradient-to-tl from-[#ECBD00] to-black absolute bottom-0 right-0">
        <div className="bg-[#F9F9F9] w-[480px] h-[480px] relative bottom-[1px] right-[1px]"></div>
      </div>
    </div>
  );
}
