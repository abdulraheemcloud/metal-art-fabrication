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
    title: "Preview Project",
    category: "Custom MS Gates & Grills",
    description:
      "Representative image — not a completed project. Replace with customer-approved project photography and verified details.",
    image: {
      src: "/metal-art-fabrication/assets/gates-grills.webp",
      alt: "Representative visual for Custom MS Gates & Grills category — not a completed Metal Art Fabrication project",
    },
    placeholder: true,
    verificationStatus: "unverified",
  },
  {
    id: "placeholder-project-02",
    title: "Preview Project",
    category: "Staircases & Handrails",
    description:
      "Representative image — not a completed project. Replace with customer-approved project photography and verified details.",
    image: {
      src: "/metal-art-fabrication/assets/staircases-handrails.webp",
      alt: "Representative visual for Staircases & Handrails category — not a completed Metal Art Fabrication project",
    },
    placeholder: true,
    verificationStatus: "unverified",
  },
  {
    id: "placeholder-project-03",
    title: "Preview Project",
    category: "Structural Steel & Shed Works",
    description:
      "Representative image — not a completed project. Replace with customer-approved project photography and verified details.",
    image: {
      src: "/metal-art-fabrication/assets/structural-steel.webp",
      alt: "Representative visual for Structural Steel & Shed Works category — not a completed Metal Art Fabrication project",
    },
    placeholder: true,
    verificationStatus: "unverified",
  },
] as const satisfies readonly ProjectItem[];
