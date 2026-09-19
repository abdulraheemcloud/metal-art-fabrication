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
    id: "custom-fabrication",
    title: "Custom Metal Fabrication",
    description:
      "Discuss a made-to-order metal requirement — brackets, frames, enclosures, or one-off pieces shaped to your specifications.",
    icon: "custom",
    actionLabel: "Discuss this requirement",
    actionHref: "#contact",
    placeholder: true,
    verificationStatus: "unverified",
  },
  {
    id: "metal-components",
    title: "Metal Components & Assemblies",
    description:
      "Explore metal parts or sub-assemblies for a project — cut, formed, machined, or welded to your dimensions.",
    icon: "structural",
    actionLabel: "Discuss this requirement",
    actionHref: "#contact",
    placeholder: true,
    verificationStatus: "unverified",
  },
  {
    id: "decorative-metalwork",
    title: "Decorative Metalwork",
    description:
      "Enquire about ornamental or visually focused metal elements — gates, screens, balustrades, or feature pieces.",
    icon: "decorative",
    actionLabel: "Discuss this requirement",
    actionHref: "#contact",
    placeholder: true,
    verificationStatus: "unverified",
  },
  {
    id: "repair-modification",
    title: "Repair & Modification",
    description:
      "Review changes, repairs, or adaptations to an existing metal item — welding repairs, alterations, or reinforcements.",
    icon: "repair",
    actionLabel: "Discuss this requirement",
    actionHref: "#contact",
    placeholder: true,
    verificationStatus: "unverified",
  },
] as const satisfies readonly ServiceItem[];