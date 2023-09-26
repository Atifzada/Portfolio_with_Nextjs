import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const MustFintect = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Devleoper
        <span className="text-textGreen tracking-wide">@Must Fintect</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2023 - Present{" "}
      </p>
      <ul>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Collaboration with cross-functional teams has been a critical aspect
          of my work, enabling the delivery of innovative features that have
          contributed to a significant 20% increase in user engagement and a 15%
          boost in conversion rates.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          My implementation of best practices and codebase optimization has led
          to a noteworthy reduction in application load times by 30%, as well as
          improved application performance
        </li>
      </ul>
    </motion.div>
  );
};

export default MustFintect;
