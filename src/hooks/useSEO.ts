import { useEffect } from "react";

export function useSEO(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);
}
