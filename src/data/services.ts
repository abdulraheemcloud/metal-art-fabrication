export type ServiceIcon = "custom" | "structural" | "decorative" | "repair";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  actionLabel?: string;
  actionHref?: string;
  placeholder: boolean;
  verificationStatus: "unverified" | "verified";
}

export const services: readonly ServiceItem[] = [
  {
    id: "ms-stainless-fabrication",
    title: "MS & Stainless Steel Fabrication",
    description:
      "Fabrication work using mild steel and stainless steel — brackets, frames, enclosures, sheets, and one-off pieces shaped to your exact specifications.",
    icon: "custom",
    actionLabel: "Discuss this requirement",
    actionHref: "#contact",
    placeholder: false,
    verificationStatus: "verified",
  },
  {
    id: "structural-steel-sheds",
    title: "Structural Steel Works & Sheds",
    description:
      "Structural steel fabrication for sheds, roofing structures, building frameworks, and load-bearing steel elements for residential, commercial, and industrial projects.",
    icon: "structural",
    actionLabel: "Discuss this requirement",
    actionHref: "#contact",
    placeholder: false,
    verificationStatus: "verified",
  },
  {
    id: "gates-grills-railings",
    title: "Gates, Grills & Railings",
    description:
      "Ornamental and functional metal elements — custom gates, grills, balustrades, railings, and decorative feature pieces for homes, shops, and commercial spaces.",
    icon: "decorative",
    actionLabel: "Discuss this requirement",
    actionHref: "#contact",
    placeholder: false,
    verificationStatus: "verified",
  },
  {
    id: "rolling-shutters",
    title: "Rolling Shutters",
    description:
      "Rolling shutters for security, privacy, and weather protection — residential, commercial, and industrial installations including repair and modification work.",
    icon: "repair",
    actionLabel: "Discuss this requirement",
    actionHref: "#contact",
    placeholder: false,
    verificationStatus: "verified",
  },
] as const satisfies readonly ServiceItem[];