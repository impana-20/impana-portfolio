import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { ComputersCanvas } from "../canvas";
import heroBg from "../../assets/herobg.png";

const Hero = () => {
  return (
    <section className={`relative mx-auto w-full h-screen`} style={{backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className={`absolute inset-0 flex flex-col justify-between ${styles.paddingX}`}>
        {/* Top: Introduction in one line */}
        <div className="flex items-center justify-center pt-32">
          <div className="flex flex-row items-center gap-5 max-w-5xl">
            <div className="flex flex-col items-center justify-center">
              <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
              <div className="violet-gradient h-20 w-1 sm:h-40" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
              </h1>
              <p className={`${styles.heroSubText} text-white-100 mt-2`}>
                {config.hero.p[0]} <br className="hidden sm:block" />
                {config.hero.p[1]}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Middle: 3D Computer */}
        <div className="flex justify-center items-end pb-24">
          <div className="w-full max-w-3xl h-80">
            <ComputersCanvas />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
