import { ProjectInfo } from "@/interfaces/project-info";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

interface Props {
  project: ProjectInfo;
}

export const ProjectCard = ({ project }: Props) => {
  const { title, description, image, live, github, techStack } = project;

  return (
    <Card>
      <Image
        className="w-full object-cover h-56 rounded-md rounded-b-none"
        src={image}
        height={200}
        width={400}
        alt="Screenshot of Manguito app"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {github && (
          <Link href={github}>
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </Link>
        )}
        {live && (
          <Link href={live}>
            <Button variant="outline" size="sm">
              <Globe className="mr-2 h-4 w-4" />
              Site
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};
