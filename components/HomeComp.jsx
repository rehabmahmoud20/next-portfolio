import Typewriter from "typewriter-effect";
import Socials from "./header/Socials";
const HomeComp = () => {
  return (
    <section className="container mx-auto    h-screen flex items-center justify-center md:block md:pt-[50px]">
      {/* content */}

      <div className="md:mb-[30px] text-center md:text-start">
        <h4 className="capitalize  mb-4">hi there</h4>
        <h1>i'm rehab mahmoud</h1>
        <h3 className="mb-[50px]">
          <Typewriter
            options={{
              strings: "front end developer",
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h3>
        <div className="flex flex-col items-center justify-center md:block">
          <button className="w-auto px-4 mb-8 ">
            <a
              href="https://drive.google.com/file/d/1EVmSHfUuFW5zv59ltn700zROdTkdQY52/view?usp=sharing"
              target="_blank"
            >
              download cv
            </a>
          </button>
          {/* <Socials/> */}

          <Socials />
        </div>
      </div>

      <div className="front-end hidden md:block relative"></div>
    </section>
  );
};

export default HomeComp;
