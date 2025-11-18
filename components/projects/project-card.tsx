import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";
import { getProjectImageUrl } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = getProjectImageUrl(project);

  return (
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg">
      <div className="relative w-full h-[200px]">
        <Image
          className="rounded-lg border border-border object-cover"
          src={imageUrl}
          alt="img"
          fill
          unoptimized={!project.companyLogoImg && !!project.websiteLink}
        />
      </div>
      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <div className="flex items-center justify-between mt-2">
          <Link href={`/projects/${project.id}`}>
            <Button variant={"default"}>
              Read more
              <Icons.chevronRight className="w-4 ml-1" />
            </Button>
          </Link>
          {(project.websiteLink || project.githubLink) && (
            <Link
              href={project.websiteLink || project.githubLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"outline"} size={"icon"}>
                {project.websiteLink ? (
                  <Icons.externalLink className="w-4 h-4" />
                ) : (
                  <Icons.gitHub className="w-4 h-4" />
                )}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
