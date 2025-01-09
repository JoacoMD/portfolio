import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectInfo } from "@/interfaces/project-info";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects: ProjectInfo[] = [
  {
    title: "Manguito",
    description:
      "Clone of Cafecito for a university project using Java with Springboot as backend and Angular as a frontend",
    image: "/manguito.png",
    github: "https://github.com/JoacoMD/manguito_app",
    live: "https://manguito.vercel.app/",
    techStack: ["Java", "Spring Boot", "Angular", "MySQL"],
  },
  {
    title: "Infinite Space Flight",
    description: "Prototype game using third party assets in Unity",
    image: "/infiniteflight.png",
    live: "https://dinojoaco.itch.io/infinite-space-flight",
    techStack: ["Unity", "C#"],
  },
  {
    title: "LSL Library",
    description: "Library of Livesplit Layouts for sharing creations.",
    image: "/lsl-library.png",
    live: "https://livesplitlayout-library.vercel.app",
    techStack: ["React", "Next.js", "MySQL"],
  },
];

const evenProjects = projects.filter((_, index) => index % 2 === 0);
const oddProjects = projects.filter((_, index) => index % 2 !== 0);

const experiences = [
  {
    title: "Softtek - Fullstack Developer",
    date: "August 2019 - Present",
    tasks: [
      "Maintained and upgraded applications on both frontend (React) and backend (Java)",
      "Migrated legacy applications to modern stacks such as Next.js and Quarkus",
      "Refactored old mobile applications using Ionic, ensuring compatibility for both web and mobile platforms",
    ],
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Java",
  "Spring Boot",
  "SQL",
  "Git",
  "Unity",
  "C#",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Docker",
  "Kubernetes",
];

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-start">
      <div className="max-w-[80%] mx-auto">
        <section className="flex items-center justify-start mt-8 px-8">
          <Image
          className="rounded-full aspect-square shadow-sm border-2 border-secondary"
          src="/placeholder.webp"
          width={200}
          height={200}
          alt="Photo of me"
        />
          <div>
            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-4xl antialised font-bold">
                  Joaquin Mendoza Dib
                </CardTitle>
                <CardDescription className="text-xl">
                  Fullstack Developer
                </CardDescription>
              </CardHeader>
              <CardContent>
                A passionate developer dedicated to solving complex problems{" "}
                <br /> and continuously learning new technologies.
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="experience" className="my-12 px-8">
          <h2 className="text-3xl font-semibold mb-4 antialiased">
            Experience
          </h2>
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <p className="text-muted-foreground">{experience.date}</p>
                  <ul className="list-disc list-inside mt-2">
                    {experience.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section id="projects" className="my-12 px-8">
          <h2 className="text-3xl font-semibold mb-4 antialiased">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            <div className="flex flex-col gap-4">
              {evenProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {oddProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section className="my-12 px-8">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
      <section id="contact" className="bg-muted py-8 rounded-lg w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <Button>
            <Link href="mailto:mendozadibjoaquin@gmail.com">Contact Me</Link>
          </Button>
        </div>
      </section>
      <footer className="flex justify-center items-center w-full py-6">
        <span className="font-bold text-primary flex gap-1">
          Made with <Heart className="fill-current" /> by me
        </span>
      </footer>
    </main>
  );
}
