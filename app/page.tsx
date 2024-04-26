import React from "react";

export default function Page() {
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center">
      <p className="text-3xl sm:text-4xl">
        <span className="text-muted-foreground">@somehq/</span>something
      </p>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        The plate is boiling. Just craft something!
      </p>
    </div>
  );
}
