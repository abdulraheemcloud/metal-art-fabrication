import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  jsonLd?: Record<string, unknown>;
}

export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogType = "website",
  twitterCard = "summary_large_image",
  jsonLd,
}: SEOProps) {
  const baseUrl = "https://abdulraheemcloud.github.io/metal-art-fabrication";

  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }

    const canonicalUrl = canonical ?? baseUrl;
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink);
    }

    const ogTitleContent = ogTitle ?? title;
    const ogDescContent = ogDescription ?? description;
    const ogUrl = canonicalUrl;

    const ogTags = [
      { property: "og:title", content: ogTitleContent },
      { property: "og:description", content: ogDescContent },
      { property: "og:type", content: ogType },
      { property: "og:url", content: ogUrl },
    ];

    ogTags.forEach((tag) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="${tag.property}"]`);
      if (el) {
        el.setAttribute("content", tag.content);
      } else {
        el = document.createElement("meta");
        el.setAttribute("property", tag.property);
        el.setAttribute("content", tag.content);
        document.head.appendChild(el);
      }
    });

    const twitterTags = [
      { name: "twitter:card", content: twitterCard },
      { name: "twitter:title", content: ogTitleContent },
      { name: "twitter:description", content: ogDescContent },
    ];

    twitterTags.forEach((tag) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${tag.name}"]`);
      if (el) {
        el.setAttribute("content", tag.content);
      } else {
        el = document.createElement("meta");
        el.name = tag.name;
        el.content = tag.content;
        document.head.appendChild(el);
      }
    });

    if (jsonLd) {
      let script = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"][data-seo="true"]');
      if (script) {
        script.textContent = JSON.stringify(jsonLd);
      } else {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "true");
        script.textContent = JSON.stringify(jsonLd);
        document.head.appendChild(script);
      }
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogType, twitterCard, jsonLd]);
}