import { FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const Socials = () => {
  return (
    <div>
      <div className="flex text-2xl gap-x-2 justify-between  w-fit">
        <a href="https://www.linkedin.com/in/rehabmahmoud20/" target="_blank">
          <div className="icon">
            <FaLinkedinIn />
          </div>
        </a>
        <a href="https://github.com/rehabmahmoud20" target="_blank">
          <div className="icon">
            <FaFacebook />
          </div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100025130474129"
          target="_blank"
        >
          <div className="icon">
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.rehabgendy16@gmail.com"
          target="_blank"
        >
          <div className="icon">
            <AiOutlineMail />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Socials;
