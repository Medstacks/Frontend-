import type { SupportCardProps } from "../../types";

export default function SupportCard ({ icon, title, text}:SupportCardProps) {
  return (
    <div className="bg-white p-3 lg:px-4 rounded-lg shadow-md w-[300px] lg:w-[350px] hover:shadow-xl transition items-center flex flex-col ">
      <div className="text-green-500 text-2xl mb-2">{icon}</div>
          <h3 style={{fontSize:'1.5rem'}} className="font-semibold text-black mb-2 text-nowrap">{title}</h3>
      <p style={{fontSize:'0.65rem'}} className="text-gray-600 mb-2 h-[30px]">{text}</p>
    </div>
  );
};
