import classnames from "classnames";

import React from "react";
import { useSpring, useSprings, animated } from "react-spring";
import type { NextPage } from "next";

import { DefaultProp } from "../types/types";

import workExperience from "../constants/workExperience";
import education from "../constants/education";
import stack from "../constants/stack";

import useLangStore from "../hooks/useLangStore";

import generatePlugsForAnimation from "../functions/plugsForAnimation";

const plugsForFormTitles = generatePlugsForAnimation(8); // Заглушки для анимаций

const About: NextPage = ({ className }: DefaultProp) => {
  const enLang = useLangStore((store) => store.enLang);

  const titlesSprings = useSprings(
    plugsForFormTitles.length,
    plugsForFormTitles.map((_, idx) => ({
      delay: 200 + 200 * idx,
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      config: {
        duration: 700,
      },
    }))
  );

  return (
    <div
      className={classnames(
        className,
        "top-16 overflow-y-scroll oveflow-x-hidden h-[90vh] no-scrollbar sm:h-[60vh] sm:overflow-x-hidden sm:top-48 sm:left-1/2 sm:-translate-x-2/4 sm:max-w-lg lg:max-w-4xl lg:left-auto lg:right-36 lg:translate-x-0 lg:top-52 xl:flex"
      )}
    >
      <div className="-mt-10 lg:max-w-[542px]">
        <div className="my-10">
          <animated.h1
            style={titlesSprings[0]}
            className="font-bold text-[32px] leading-[37px]"
          >
            {enLang ? "Hi, I’m Andrey" : "Привет, я Андрей"}
          </animated.h1>
          <animated.p
            style={titlesSprings[1]}
            className="mt-[23px] text-sm font-light"
          >
            {enLang
              ? "I’m node.js developer, well-versed in js, lead pet projects and enjoy development. I am sociable and find a common language. I can work both independently and in a team. Five on a five-point Googling scale. Diploma with honors."
              : "Я node.js разработчик, хорошо разбираюсь в js, веду pet-проекты и получаю удовольствие от разработки. Я коммуникабелен и легко нахожу общий язык. Я могу работать как самостоятельно, так и в команде. Пять по пятибалльной шкале гуглинга. Диплом с отличием."}
          </animated.p>
        </div>
        <div className="my-10">
          <animated.h1
            style={titlesSprings[2]}
            className="font-bold text-[32px] leading-[37px]"
          >
            {enLang ? "Work experience" : "Опыт работы"}
          </animated.h1>
          <animated.div style={titlesSprings[3]}>
            {workExperience.map((exp) => (
              <div key={exp.id} className="mt-[23px]">
                <h3 className="font-medium text-xl leading-6">
                  {enLang ? exp.post : exp.rusPost}
                </h3>
                <div className="flex mt-1 items-end lg:justify-between">
                  <p className="font-regular">
                    {enLang ? exp.place : exp.rusPlace}
                  </p>
                  <p className="ml-2 font-regular text-xs text-end leading-5">
                    {enLang ? exp.duration : exp.rusDuration}
                  </p>
                </div>
                <ul className="flex flex-col mt-1 text-sm font-light list-disc ml-6 leading-4">
                  {exp.tasks.map((task) => (
                    <li key={task.id}>{enLang ? task.eng : task.rus}</li>
                  ))}
                </ul>
              </div>
            ))}
          </animated.div>
        </div>
        <div className="my-10 lg:my-none">
          <animated.h1
            style={titlesSprings[4]}
            className="font-bold text-[32px] leading-[37px]"
          >
            {enLang ? "Education" : "Образование"}
          </animated.h1>
          <animated.div style={titlesSprings[5]}>
            {education.map((ed) => (
              <div key={ed.id} className="mt-[23px]">
                <h3 className="font-medium text-xl leading-6">
                  {enLang ? ed.direction : ed.rusDirection}
                </h3>
                <div className="flex mt-1 items-end lg:justify-between">
                  <p className="text-sm font-normal">
                    {enLang ? ed.place : ed.rusPlace}
                  </p>
                  <p className="ml-2 font-regular text-xs text-end leading-4">
                    {enLang ? ed.duration : ed.rusDuration}
                  </p>
                </div>
              </div>
            ))}
          </animated.div>
        </div>
      </div>
      <div className="my-10 xl:ml-24 lg:my-0">
        <animated.h1
          style={titlesSprings[6]}
          className="font-bold text-[32px] leading-[37px]"
        >
          {enLang ? "Stack and Skills" : "Стек и навыки"}
        </animated.h1>
        <animated.div style={titlesSprings[7]}>
          {stack.map((cat) => (
            <div key={cat.id} className="mt-[23px]">
              <h3 className="font-medium text-xl">
                {enLang ? cat.title : cat.rusTitle}
              </h3>
              <div className="font-light text-sm">
                {cat.skills.map((skill) => (
                  <p
                    key={skill.id}
                    className="mt-1"
                  >{`${skill.name} - ${skill.assessment}`}</p>
                ))}
              </div>
            </div>
          ))}
        </animated.div>
      </div>
    </div>
  );
};

export default About;
