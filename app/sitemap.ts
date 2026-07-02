import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

const baseUrl = "https://islamabadpestcontrolpk.com";
const appDir = path.join(process.cwd(), "app");

function collectStaticRoutes(dir: string, routePrefix = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes: string[] = [];
  const hasPage = entries.some((entry) =>
    entry.isFile() && (entry.name === "page.ts" || entry.name === "page.tsx")
  );

  if (hasPage) {
    routes.push(routePrefix || "/");
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "api" || entry.name === "sitemap.ts" || entry.name === "robots.ts") {
      continue;
    }
    if (entry.name.startsWith("(") || entry.name.startsWith("[") || entry.name.includes("]")) {
      continue;
    }

    const childRoute = routePrefix === "" ? `/${entry.name}` : `${routePrefix}/${entry.name}`;
    routes.push(...collectStaticRoutes(path.join(dir, entry.name), childRoute));
  }

  return routes;
}

function getPriority(url: string) {
  if (url === "/") return 1.0;
  if (url.startsWith("/services")) return 0.8;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = Array.from(new Set(collectStaticRoutes(appDir))).sort();

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: getPriority(route),
  }));
}
