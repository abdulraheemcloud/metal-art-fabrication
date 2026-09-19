export type ProjectCategory = string;

export interface ProjectImage {
  src: string | null;
  alt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: ProjectImage;
  placeholder: boolean;
  verificationStatus: "unverified" | "verified";
}

export const projects: readonly ProjectItem[] = [
  {
    id: "placeholder-project-01",
    title: "Placeholder Project 01",
    category: "Placeholder category",
    description:
      "Replace this entry with a verified project title, category, and concise description before publishing.",
    image: {
      src: null,
      alt: "Placeholder visual; replace with verified customer project photography",
    },
    placeholder: true,
    verificationStatus: "unverified",
  },
  {
    id: "placeholder-project-02",
    title: "Placeholder Project 02",
    category: "Placeholder category",
    description:
      "Reserved for a confirmed project. Add only customer-approved details and imagery in this space.",
    image: {
      src: null,
      alt: "Placeholder visual; replace with verified customer project photography",
    },
    placeholder: true,
    verificationStatus: "unverified",
  },
  {
    id: "placeholder-project-03",
    title: "Placeholder Project 03",
    category: "Placeholder category",
    description:
      "Use this slot for a verified project once the title, description, category, and image are approved.",
    image: {
      src: null,
      alt: "Placeholder visual; replace with verified customer project photography",
    },
    placeholder: true,
    verificationStatus: "unverified",
  },
] as const satisfies readonly ProjectItem[];
