
import { Bug, Code, Command, Rocket, Server, TextCursorInputIcon } from "lucide-react";
  
  interface Props {
    title: string;
    num: string;
    img:string;
    desc:string
  }
  
  const iconMapping = {
    "01": Command,
    "02": Server,
    "03": Code,
    "04": TextCursorInputIcon,
    "05": Rocket,
    "06": Bug,
  };
  
  const ServiceCard = ({ num, title,img ,desc}: Props) => {
    const IconComponent =
      (iconMapping as Record<string, React.ElementType>)[num] || Command;
    return (
      <div className="bg-black/10 custom__service z-[100]  transform rounded-2xl text-center p-6 shadow-md "  style={{
        backgroundImage: `url('/wave/${img}.png')`, 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center, bottom", // Posisi gambar latar
        backgroundSize: "cover, contain" // Ukuran untuk background SVG
      }}>
        <IconComponent
          className={"w-[5rem] relative z-[1] mx-auto h-[5rem] text-primary  "}
        />
        <h1 className="text-[25px] md:font-bold font-semibold relative z-[1] text-black/70 dark:text-white mt-[1rem] ">
          {title}
        </h1>
        <p className="text-black/70 dark:text-white font-medium  text-[15px]  mt-[0.8rem] ">{desc}</p>
        <p className="text-black/70  dark:text-white text-[1.8rem] font-bold top-2 right-4 absolute">{num}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  