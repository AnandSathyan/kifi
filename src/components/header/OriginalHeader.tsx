import React, { useEffect } from "react";

import HeaderOptional from "./HeaderOptional/HeaderOptional";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderSub from "./HeaderSub/HeaderSub";
import TopHeader from "./TopHeader/TopHeader";
function OriginalHeader() {
  return (
    <div>
      {" "}
      <header>
        {/* <TopHeader /> */}

        <HeaderSearch />

        <HeaderSub />
        <nav>
          {/* <HeaderOptional /> */}
        </nav>
      </header>
    </div>
  );
}

export default OriginalHeader;
