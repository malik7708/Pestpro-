import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceCategoryDetailPage } from "@/components/services/ServiceCategoryDetailPage";
import {
  getServiceCategoryPageData,
  getStaticCategoryParams,
} from "@/lib/serviceCategoryContent";

export const dynamicParams = false;

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getStaticCategoryParams("fumigation");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = getServiceCategoryPageData("fumigation", category);

  if (!data) {
    return {};
  }

  return {
    title: data.content.heroTitle,
    description: data.content.heroDescription,
    keywords: [
      data.category.label,
      "fumigation services",
      "residential fumigation",
      "commercial fumigation",
      "industrial fumigation",
      "property fumigation",
    ],
  };
}

export default async function FumigationCategoryPage({ params }: Props) {
  const { category } = await params;
  const data = getServiceCategoryPageData("fumigation", category);

  if (!data) {
    notFound();
  }

  return <ServiceCategoryDetailPage data={data} />;
}
