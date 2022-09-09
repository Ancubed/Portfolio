import classnames from "classnames";

import React from "react";
import type { FunctionComponent } from "react";

import { DefaultProp } from "../types/types";

import useLangStore from "../hooks/useLangStore";

const LangChanger: FunctionComponent<DefaultProp> = ({
  className,
}: DefaultProp) => {
  const enLang = useLangStore((store) => store.enLang);
  const changeLang = useLangStore((store) => store.changeLang);

  return (
    <div className={classnames(className, "")}>
      <button onClick={changeLang} className="text-xl font-light">
        {enLang ? "Ru" : "En"}
      </button>
    </div>
  );
};

export default LangChanger;
