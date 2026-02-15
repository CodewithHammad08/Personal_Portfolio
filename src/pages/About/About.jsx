import HeroImg from "@/assets/images/hero.jpg";
import logo from "@/assets/images/logo.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-semibold">Hammad Dalvi</span>, a passionate Web Developer
                with a strong interest in building user-friendly and visually appealing web solutions.
                I enjoy creating clean, responsive designs and continuously improving my skills to stay
                updated with the latest trends in web development.{" "}
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
                I specialize in crafting intuitive, responsive interfaces and developing robust backend
                systems. I also have a growing interest in applying machine learning techniques to solve
                real-world problems and enhance overall application performance.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a passion for building
                    impactful digital solutions. As a Full-Stack Developer with expertise in
                    AI/ML, I strive to create applications that are not only efficient and
                    scalable but also intelligent and user-focused, empowering developers and
                    businesses worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Web Developer & AI/ML Enthusiast
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={logo}
                        alt="Developer Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Hammad Dalvi</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
