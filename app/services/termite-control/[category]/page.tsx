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
  return getStaticCategoryParams("termite-control");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = getServiceCategoryPageData("termite-control", category);

  if (!data) {
    return {};
  }

  return {
    title: data.content.heroTitle,
    description: data.content.heroDescription,
    keywords: [
      data.category.label,
      "termite control services",
      "termite treatment",
      "termite proofing",
      "Islamabad termite control",
    ],
  };
}

export default async function TermiteControlCategoryPage({ params }: Props) {
  const { category } = await params;
  const data = getServiceCategoryPageData("termite-control", category);

  if (!data) {
    notFound();
  }

  return <ServiceCategoryDetailPage data={data} />;
}
