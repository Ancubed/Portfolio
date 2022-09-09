import classnames from "classnames";

import React from "react";
import type { FunctionComponent } from "react";

import { DefaultProp } from "../types/types";

import useLangStore from "../hooks/useLangStore";

const LangChanger: FunctionComponent<DefaultProp> = ({
  className,
}: DefaultProp) => {
  const enLang = useLangStore((store) => store.enLang);

  return (
    <p className={classnames(className, "")}>
      {enLang
        ? "Sorry, the app is designed for bigger screens"
        : "Извините, приложение рассчитано на экраны побольше"}
    </p>
  );
};

export default LangChanger;
