import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import SplitText from "@/components/SplitText/SplitText";
import RotatingText from "@/components/RotatingText/RotatingText";
import Lanyard from "@/components/Lanyard/Lanyard";
import Magnet from "@/components/Magnet/Magnet";
import LanyardDark from "@/components/Dark/Lanyard/LanyardDark";



export default function Home() {
  return (
    <>
      <section id="home" className="flex justify-center lg:px-18 bg-white dark:bg-slate-900 transition-colors pt-24 lg:pt-0">
          <div className="container">
            <div className="flex flex-wrap ">
              <div className=" w-full self-center px-4 lg:w-1/2 pt-26 lg:pt-0 pb-6 lg:pl-16">
                <div className="  text-base   gap-2 font-semibold md:text-xl">
                  <div className=" -mb-7 pb-1 lg:pb-2">
                    <SplitText
                      text="Arlian Nasrul Ramadhani"
                      className=" text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold   text-slate-800 dark:text-slate-400 "
                      delay={50}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                    />
                  </div> 
                  <br></br>
                  <div className="pb-1 lg:pb-2">
                    <SplitText
                      text="Front-End Web Developer"
                      className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[#6497B1] dark:text-[#82c4e5] "
                      delay={90}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                      
                    />
                  </div>
                  <div className="flex  gap-2  ">
                    <AnimatedContent
                      distance={120}
                      direction="vertical"
                      reverse={false}
                      config={{ tension: 30, friction: 10 }}
                      initialOpacity={0.2}
                      animateOpacity
                      scale={1.0}
                      threshold={0.2}
                    >
                      <h1 className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-500 dark:text-slate-400 transition-all font-semibold ">
                        {" "}
                        I'm a
                      </h1>
                    </AnimatedContent>

                    <AnimatedContent
                      distance={110}
                      direction="horizontal"
                      reverse={false}
                      config={{ tension: 30, friction: 10 }}
                      initialOpacity={0.2}
                      animateOpacity
                      scale={1.0}
                      threshold={0.2}
                    >
                      <RotatingText
                        texts={[
                          "Information Systems Student",
                          "Web Developer",
                          "Tech Enthusiast",
                          "Gamer",
                        ]}
                        mainClassName=" min-w-[205px] max-w-[500px]  text-slate-700 dark:text-slate-500 overflow-hidden  flex text-center justify-center rounded-lg text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  inline-block transition-all"
                        staggerFrom={"last"}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-120%", opacity: 0 }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 "
                        transition={{
                          type: "spring",
                          damping: 30,
                          stiffness: 400,
                          duration: 0.5,
                        }}
                        elementLevelClassName=""
                        rotationInterval={2500}
                      />
                    </AnimatedContent>
                  </div>
                </div>

                <AnimatedContent
                  distance={150}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <a
                    className="flex mt-2 lg:mt-2 "
                    href="https://docs.google.com/document/d/12aV7gNu7xec1ggA0ST0ZuRgXP4l-YyqYmqT4q6fcEIM/export?format=pdf"
                  >
                    <Magnet padding={50} disabled={false} magnetStrength={2}>
                      <button className="active:scale-80 transition-all cursor-pointer">
                        <div className="  text-sm border-2 lg:text-lg   border-[#6497B1] p-2 rounded-3xl text-slate-500 dark:text-slate-300 font-semibold pointer-events-auto hover:bg-[#6497B1] hover:text-white transition">
                          Download Resume
                        </div>
                      </button>
                    </Magnet>
                  </a>
                </AnimatedContent>
              </div>
              <div className=" items-center translate-x-1/16 lg:translate-x-0 w-full h-[72vh]  scale-85 lg:scale-100 lg:h-full  -top-10 lg:w-1/2 relative z-0 ">
               <div className="dark:hidden ">
                  <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} />
                </div>
               <div className="hidden dark:block">
                  <LanyardDark position={[0, 0, 18]} gravity={[0, -40, 0]} />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
