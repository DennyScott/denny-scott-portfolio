import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";

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
        <a href="/work" className={classnames({ "border-b": isWork })}>
          Work
        </a>
        <a href="/blog" className={classnames({ "border-b": isBlog })}>
          Blog
        </a>
      </div>
    </div>
  );
}
