import classnames from "classnames";

import React from "react";
import { useSpring, animated } from "react-spring";
import type { NextPage } from "next";

import { DefaultProp } from "../types/types";

import portfolioWorks from "../constants/portfolioWorks";

import useLangStore from "../hooks/useLangStore";

const Portfolio: NextPage = ({ className }: DefaultProp) => {
  const enLang = useLangStore((store) => store.enLang);

  const workNameStyles = useSpring({
    delay: 200,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 500,
    },
  });

  const stackStyles = useSpring({
    delay: 450,
    from: {
      top: -30,
      opacity: 0,
    },
    to: {
      top: 0,
      opacity: 1,
    },
    config: {
      duration: 250,
    },
  });

  const descriptionStyle = useSpring({
    delay: 700,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 650,
    },
  });

  return (
    <div
      className={classnames(
        className,
        "top-16 -my-10 overflow-y-scroll oveflow-x-hidden h-[90vh] no-scrollbar sm:h-[70vh] sm:overflow-x-hidden sm:top-48 sm:left-1/2 sm:-translate-x-2/4 sm:max-w-lg lg:left-36 lg:translate-x-0 lg:top-52"
      )}
    >
      {portfolioWorks.map((work) => (
        <div key={work.id} className="my-10">
          <div>
            <animated.h1
              style={workNameStyles}
              className="font-bold text-[32px] leading-[37px]"
            >
              {enLang ? work.title : work.rusTitle}
            </animated.h1>
            <animated.div
              style={stackStyles}
              className="relative font-light text-base mb-6 -mx-2.5 leading-[18px]"
            >
              {work.tags.map((tag) => (
                <span key={tag} className="mx-2.5">
                  {tag}
                </span>
              ))}
            </animated.div>
          </div>
          <animated.p
            style={descriptionStyle}
            className="relative font-light text-base sm:text-2xl leading-[28px]"
          >
            {enLang ? work.description : work.rusDescription}
          </animated.p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
