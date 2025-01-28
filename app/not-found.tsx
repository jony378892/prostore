"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFoundPAge() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-44 mb-2">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
      />
      <div className="p-6 rounded-lg shadow-none sm:shadow-md text-center w-full sm:w-1/2 md:w-1/3">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
}
