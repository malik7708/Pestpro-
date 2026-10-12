import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { mainServices } from "@/lib/servicesConfig";
import { getStaticCategoryParams } from "@/lib/serviceCategoryContent";

const baseUrl = "https://islamabadpestcontrolpk.com";
const appDir = path.resolve(process.cwd(), "app");

function isWithinAppDir(candidate: string) {
  const relative = path.relative(appDir, candidate);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function collectStaticRoutes(dir: string, routePrefix = ""): string[] {
  const resolvedDir = path.resolve(dir);
  if (!isWithinAppDir(resolvedDir)) {
    return [];
  }

  const entries = fs.readdirSync(resolvedDir, { withFileTypes: true });
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
    const childDir = path.join(resolvedDir, entry.name);
    if (!isWithinAppDir(childDir)) {
      continue;
    }

    routes.push(...collectStaticRoutes(childDir, childRoute));
  }

  return routes;
}

function getPriority(url: string) {
  if (url === "/") return 1.0;
  if (url.startsWith("/services")) return 0.8;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedServiceRoutes = mainServices.flatMap((service) =>
    getStaticCategoryParams(service.id).map(
      ({ category }) => `${service.href}/${category}`,
    ),
  );
  const allRoutes = Array.from(
    new Set([...collectStaticRoutes(appDir), ...generatedServiceRoutes]),
  ).sort();

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    priority: getPriority(route),
  }));
}
