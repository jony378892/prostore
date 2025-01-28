import Image from "next/image";
import Link from "next/link";
import React from "react";

import { APP_NAME } from "@/lib/constants";
import Menu from "../menu";

export default function Header() {
  return (
    <header className="w-ful border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link
            href="/"
            className="flex-start"
          >
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}
