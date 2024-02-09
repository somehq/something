import React from "react";

export default function Page() {
  return (
    <div className="w-full h-[100dvh] flex flex-col items-center justify-center">
      <p className="text-3xl sm:text-4xl">
        <span className="text-secondary-light">@somehq/</span>something
      </p>
      <p className="text-sm sm:text-base text-secondary-light mt-2">
        The plate is boiling. Just craft something!
      </p>
    </div>
  );
}
