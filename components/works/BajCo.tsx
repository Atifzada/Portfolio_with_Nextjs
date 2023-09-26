import React from 'react'
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const BajCo = () => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <h3 className="flex gap-1 font-medium text-xl font-titleFont">
          Front-end Developer 
            <span className="text-textGreen tracking-wide">@SIGNITIVE LOGICS</span>
          </h3>
          <p className="text-sm mt-1 font-medium text-textDark">
            Feb 2021 - Feb 2023{" "}
          </p>
          <ul>
            <li className="text-base flex gap-2 text-textDark">
              <span className="text-textGreen mt-1">
                <TiArrowForward />
              </span>{" "}
              Demonstrated expertise in responsive web design, utilizing HTML, CSS, and JavaScript to achieve a 25% increase in user engagement.
            </li>
    
            <li className="text-base flex gap-2 text-textDark">
              <span className="text-textGreen mt-1">
                <TiArrowForward />
              </span>{" "}
              Translated wireframes into ﬂawless interfaces, resulting in a notable 20% boost in conversion rates.
            </li>
    
            <li className="text-base flex gap-2 text-textDark">
              <span className="text-textGreen mt-1">
                <TiArrowForward />
              </span>{" "}
              Collaborated effectively to streamline integration, leading to a 30% reduction in bug reports and improved user experiences.
            </li>
          </ul>
        </motion.div>
      );
}

export default BajCo