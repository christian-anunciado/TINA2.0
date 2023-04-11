import React from "react";
import PageNotFound from "../../assets/notFound.webp";
type Props = {};

function NotFound({}: Props) {
  return (
    <div className="h-[100svh]">
      <div className="flex h-full items-center justify-center">
        <img
          src={PageNotFound}
          className="pointer-events-none h-2/6 w-2/6"
          alt=""
        />
      </div>
    </div>
  );
}

export default NotFound;
