import React from "react";
import type { FunctionComponent } from "react";

import Link from "next/link";

const FooterWrapper: FunctionComponent = () => {
  return (
    <Link href="https://github.com/ancubed">
      <a target="_blank" className="flex flex-col items-center lg:items-end">
        <span className="text-2xl leading-[28px] font-light whitespace-nowrap">
          Powered by
        </span>
        <div className="flex items-start font-bold">
          <span className="text-6xl leading-[69px]">AN</span>
          <span className="text-[20px]">3</span>
        </div>
      </a>
    </Link>
  );
};

export default FooterWrapper;
