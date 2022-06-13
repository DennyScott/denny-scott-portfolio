import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { CodeIcon } from "@heroicons/react/outline";

export function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const isWork = router.pathname.includes("/work");
  const isBlog = router.pathname.includes("/blog");

  return (
    <div
      ref={navRef}
      className="fixed container mx-auto bg-[#222]/90 backdrop-blur h-28 top-0 left-0 right-0 flex justify-between items-center z-10"
    >
      <Link href="/" passHref>
        <div className="text-3xl cursor-pointer">Home</div>
      </Link>
      <div className="text-xl flex justify-between items-center gap-6 ">
        <Link href="/work">
          <a className={classnames({ "border-b": isWork })}>Work</a>
        </Link>
        <Link href="/blog">
          <a className={classnames({ "border-b": isBlog })}>Blog</a>
        </Link>
        <a href="https://github.com/Dennyscott">
          <CodeIcon className="h-5 w-5 text-white" />
        </a>
      </div>
    </div>
  );
}
