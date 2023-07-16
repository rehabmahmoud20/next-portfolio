import Image from "next/image";
import AboutMe from "../../public/assets/images/aboutme.png";
const About = () => {
  return (
    <article className="container mx-auto  px-4 min-h-screen flex items-center py-10 lg:py-0">
      <div className="flex flex-col lg:flex-row  gap-y-10  justify-between">
        {/* content */}
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <h2 className=" mb-10">About me</h2>
          <p className="text-2xl mb-10 ">
            I'm an Egyptian developer, I am working as a Frontend
            Developer using my knowledge of HTML, CSS, JavaScript,React.js and different
            technical skills to build responsive websites different devices and
            in line with the latest design trends, I love working with other
            developers teams to share the experience with each other and to
            share our ideas to yeild perfect job .
          </p>
          <p className="signature text-xl">Rehab Mahmoud</p>
        </div>
        {/* img */}
        <div className="mx-auto lg:m-0 hover:scale-105 ease-in duration-300 cursor-pointer">
          <Image src={AboutMe} alt="developer_img" />
        </div>
      </div>
    </article>
  );
};

export default About;
