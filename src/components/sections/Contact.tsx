import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Contact = () => {

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

    <div className="mt-12 flex flex-col gap-6">
  <a
    href="mailto:impanasatheesh20@gmail.com"
    className="bg-tertiary text-white px-6 py-4 rounded-lg font-medium text-center hover:bg-[#915EFF] transition"
  >
    📧 Gmail
  </a>

  <a
    href="https://www.linkedin.com/in/impana-satheesh-8a6565292/"
    target="_blank"
    className="bg-tertiary text-white px-6 py-4 rounded-lg font-medium text-center hover:bg-[#0A66C2] transition"
  >
    💼 LinkedIn
  </a>

  <a
    href="https://github.com/impana-20"
    target="_blank"
    className="bg-tertiary text-white px-6 py-4 rounded-lg font-medium text-center hover:bg-black transition"
  >
    🐙 GitHub
  </a>
</div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
