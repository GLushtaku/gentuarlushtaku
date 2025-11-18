import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProjectInterface } from "@/config/projects";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProjectImageUrl(project: ProjectInterface): string {
  if (project.companyLogoImg) {
    return project.companyLogoImg;
  }
  // Default fallback image
  return "/projects/card/card_1.webp";
}

