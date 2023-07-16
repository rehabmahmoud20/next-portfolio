import Image from "next/image";
import Tilt from "react-parallax-tilt";


const ProjectCard = ({ item }) => {
  return (
    <Tilt  className="border p-5 border-[#426048] shadow-inner  shadow-[#52c867] rounded-xl text-center">
      <div className="relative">
      <Image
        src={item.img}
        alt="logo"
        className="h-44 w-full mb-8"
        // width={200}
        // height={200}
      />
      <p className="capitalize font-semibold text-white mb-4 ">  
     
      {item.title}
    
      </p>

      </div>
     
      <div className="flex justify-center gap-4 ">
      <button>
        <a target="_black" href={item.code}>
          code
        </a>
      </button>
      <button>
        <a target="_black" href={item.demo}>
          demo
        </a>
      </button>
      </div>
    

    </Tilt>
  );
};

export default ProjectCard;
