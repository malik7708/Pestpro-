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
  return getStaticCategoryParams("pest-control");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = getServiceCategoryPageData("pest-control", category);

  if (!data) {
    return {};
  }

  return {
    title: data.content.heroTitle,
    description: data.content.heroDescription,
    keywords: [
      data.category.label,
      "pest control services",
      "termite control",
      "rodent control",
      "insect control",
      "Islamabad pest control",
    ],
  };
}

export default async function PestControlCategoryPage({ params }: Props) {
  const { category } = await params;
  const data = getServiceCategoryPageData("pest-control", category);

  if (!data) {
    notFound();
  }

  return <ServiceCategoryDetailPage data={data} />;
}
