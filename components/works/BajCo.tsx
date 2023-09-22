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
          Mentor (Volunteer)
            <span className="text-textGreen tracking-wide">@Microverse</span>
          </h3>
          <p className="text-sm mt-1 font-medium text-textDark">
            Jan 2023 - Present{" "}
          </p>
          <ul>
            <li className="text-base flex gap-2 text-textDark">
              <span className="text-textGreen mt-1">
                <TiArrowForward />
              </span>{" "}
              Mentoring junior web developers, and providing technical support through code reviews.
            </li>
    
            <li className="text-base flex gap-2 text-textDark">
              <span className="text-textGreen mt-1">
                <TiArrowForward />
              </span>{" "}
              Proposing improvements to code organization to improve code quality and overall performance.
            </li>
    
            <li className="text-base flex gap-2 text-textDark">
              <span className="text-textGreen mt-1">
                <TiArrowForward />
              </span>{" "}
              Providing advice and tips on maintaining motivation to maintain longevity in the program.
            </li>
          </ul>
        </motion.div>
      );
}

export default BajCo