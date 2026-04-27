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
  return getStaticCategoryParams("maintenance");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = getServiceCategoryPageData("maintenance", category);

  if (!data) {
    return {};
  }

  return {
    title: data.content.heroTitle,
    description: data.content.heroDescription,
    keywords: [
      data.category.label,
      "maintenance services",
      "disinfection services",
      "floor cleaning and polishing",
      "water tank cleaning",
      "property maintenance",
    ],
  };
}

export default async function MaintenanceCategoryPage({ params }: Props) {
  const { category } = await params;
  const data = getServiceCategoryPageData("maintenance", category);

  if (!data) {
    notFound();
  }

  return <ServiceCategoryDetailPage data={data} />;
}
