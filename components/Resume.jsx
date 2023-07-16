import Image from "next/image";
import ResumeImg from "../public/assets/images/resume.png";
// import Pdf from "../public/assets/rehab-mahmoud-frontend"

const Resume = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center py-10">
         <button className="w-auto px-4 mb-8 ">
            <a
              href="https://drive.google.com/file/d/1EVmSHfUuFW5zv59ltn700zROdTkdQY52/view?usp=sharing"
              target="_blank"
            >
              download cv
            </a>
          </button>
      <Image src={ResumeImg} alt="/" />
     
    </section>
  );
};

export default Resume;
