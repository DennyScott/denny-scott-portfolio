import classNames from "classnames";
import React, { useMemo } from "react";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";
import styles from "../styles/Home.module.css";
import releasenotes from "../assets/releasenotes.png";
import Image from "next/image";

interface Project {
  title: string;
  role: string;
  description: string;
  img: string;
  className: string;
}

const data: Project[] = [
  {
    title: "Release Notes",
    role: "Lead Front-end Engineer",
    description:
      "Compiled release notes from Github pull requests into a single document for product owners",
    img: "/images/releasenotes.png",
    className: "bg-indigo-600",
  },
  {
    title: "Zenhub",
    role: "Team Lead",
    description:
      "Helps teams get more done faster with time-saving agile automations, fewer meetings, and more visibility in GitHub",
    img: "/images/zenhub.jpeg",
    className: "bg-sky-400",
  },
  {
    title: "WowVR",
    role: "Team Lead",
    description: "Design and explore a VR Patio space from your phone",
    img: "/images/wowvr.png",
    className: "bg-rose-400",
  },
  {
    title: "Aha",
    role: "Senior Front-end Engineer",
    description:
      "Build Strategic Roadmaps. Deliver Better Products, Projects, and Services",
    img: "/images/Aha.webp",
    className: "bg-orange-600",
  },
  {
    title: "Patio Builder",
    role: "UI Developer",
    description:
      "Design and explore a VR patio space with an immersive in-store experience",
    img: "/images/PatioBuilder.jpeg",
    className: "bg-pink-400",
  },
  {
    title: "Endless Aisle",
    role: "Full-stack Engineer",
    description:
      "Enabling customers in your stores to virtually browse or order a wide range of products",
    img: "/images/ea.png",
    className: "bg-sky-400",
  },
  {
    title: "Stick",
    role: "Front-end Engineer",
    description:
      "Using your unique characteristics, design and customize a hockey stick meant for you",
    img: "/images/stick.png",
    className: "bg-rose-400",
  },
  {
    title: "Becomethegamer",
    role: "Lead Front-end Engineer",
    description:
      "Aids you in picking the right heroes to build a balanced Dota 2 team",
    img: "/images/becomethegamer.jpeg",
    className: "bg-green-600",
  },
  {
    title: "Kiosk",
    role: "Front-end Engineer",
    description:
      "Plan, pick and purchase your fishing gear using an interactive guide",
    img: "/images/kiosk.png",
    className: "bg-indigo-600",
  },
  {
    title: "CodeBuddies",
    role: "Open-source FE Engineer",
    description:
      "A community of people who help each other get better at software development",
    img: "/images/codebuddies.png",
    className: "bg-pink-600",
  },
  {
    title: "ESI",
    role: "Senior Front-end Engineer",
    description:
      "An Independent Railway Services Contractor that specializes in signal support services and comprehensive signal installations",
    img: "/images/esi.png",
    className: "bg-sky-400",
  },
  {
    title: "Stencil",
    role: "Front-end Engineer",
    description:
      "Develop and export games to a multiple game engines using a refined and expandable front-end",
    img: "/images/stencil.png",
    className: "bg-orange-400",
  },
];

export default function Work() {
  const projects = useMemo(
    () =>
      data.map((item, i) => ({
        ...item,
        className: item.className + " " + styles[`project${i + 1}`],
      })),
    []
  );

  return (
    <Layout className="pb-16">
      <Navigation />
      <div className="container mx-auto pt-48">
        <div className={classNames(styles.projectGrid, "relative mt-6")}>
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                backgroundImage: `url(${project.img})`,
                backgroundSize: "cover",
                backgroundPosition: "top-center",
              }}
              className={classNames(
                styles.project,
                project.className,
                "relative h-80 bg-ind hover:"
              )}
            >
              <div className="h-full w-full flex flex-col gap-1 duration-500 justify-center items-center pt-0 opacity-0 bg-neutral-900 hover:opacity-90 transition-opacity p-4">
                <h1 className="text-4xl text-center">{project.title}</h1>
                <h2 className="text-md text-center font-bold">
                  {project.role}
                </h2>
                <h2 className="text-md italic text-center w-4/5">
                  {project.description}
                </h2>
              </div>
              {/* <Image src={releasenotes} layout="fill" alt={project.title} /> */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
