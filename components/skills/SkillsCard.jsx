import Tilt from "react-parallax-tilt";
const SkillsCard = ({ Icon,title }) => {
  return (
    <Tilt className="z-[1]">
      <div className=" p-10  text-white shadow-inner  shadow-[#52c867] rounded-xl flex flex-col justify-center items-center gap-y-4 mb-4 md:mb-0 cursor-pointer ">
        <div className="text-8xl ">
          <Icon />
        </div>
        <p className="font-semibold capitalize">{title}</p>
      </div>
    </Tilt>
  );
};

export default SkillsCard;
