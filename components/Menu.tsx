import classNames from "classnames";

import React from "react";
import { useRouter } from "next/router";

import type { FunctionComponent } from "react";

import Link from "next/link";

import { DefaultProp } from "../types/types";

import navItems from "../constants/navItems";

import useLangStore from "../hooks/useLangStore";

const Menu: FunctionComponent<DefaultProp> = ({ className }: DefaultProp) => {
  const router = useRouter();
  const enLang = useLangStore((store) => store.enLang);

  return (
    <nav className={classNames(className, "font-light text-3xl lg:-mx-6")}>
      {navItems.map((item) =>
        router.pathname != item.href ? (
          <Link href={item.href} key={item.id}>
            <a className="mx-6">{enLang ? item.title : item.rusTitle}</a>
          </Link>
        ) : (
          <span key={item.id} className="mx-6 border-b">
            {enLang ? item.title : item.rusTitle}
          </span>
        )
      )}
    </nav>
  );
};

export default Menu;
