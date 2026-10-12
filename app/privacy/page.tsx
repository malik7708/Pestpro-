import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Islamabad Pest Control handles information submitted through our website and contact form.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information you provide",
    paragraphs: [
      "When you contact us through this website, we collect the name, phone number, email address, and message you submit. We use this information to respond to your enquiry and arrange requested services.",
      "Contact form submissions are stored in our service database and sent to our business email so our team can follow up.",
    ],
  },
  {
    title: "Information collected automatically",
    paragraphs: [
      "Our hosting provider may process basic technical information needed to operate and secure the website, such as browser requests, timestamps, and error information.",
      "This website stores your theme preference in your browser's local storage. The site may also load embedded map content when you view the map; the map provider may process information under its own privacy policy.",
    ],
  },
  {
    title: "How we use and share information",
    paragraphs: [
      "We use submitted information to answer questions, provide inspections or estimates you request, deliver our services, and maintain website security.",
      "We do not sell your personal information. We share it only with service providers needed to operate the website and respond to you, or when disclosure is required by law.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "We keep enquiry information for as long as it is reasonably needed to respond, provide services, maintain business records, or meet legal requirements. We use reasonable safeguards, but no internet transmission or storage system can be guaranteed completely secure.",
    ],
  },
  {
    title: "Your choices and requests",
    paragraphs: [
      "You can contact us to ask about, correct, or request deletion of information you submitted, subject to applicable record-keeping requirements. You can control or clear local storage through your browser settings.",
    ],
  },
  {
    title: "Third-party websites and changes",
    paragraphs: [
      "Links and embedded services on this website may be governed by the privacy policies of their respective providers. This policy may be updated from time to time; the latest version will be posted on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="mx-auto max-w-4xl">
          <div className="section-tag">Your information</div>
          <h1 className="section-heading mt-3">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: October 12, 2026</p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Islamabad Pest Control respects your privacy. This policy explains what information
            this website handles and how we use it when you browse the site or contact us.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map(({ title, paragraphs }) => (
              <section key={title}>
                <h2 className="font-display text-xl font-semibold text-slate-900">{title}</h2>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-7 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section>
              <h2 className="font-display text-xl font-semibold text-slate-900">Contact us</h2>
              <p className="mt-3 leading-7 text-slate-600">
                For privacy questions or requests, email{" "}
                <a
                  href="mailto:info@islamabadpestcontrolpk.com"
                  className="font-medium text-brand-green underline underline-offset-4"
                >
                  info@islamabadpestcontrolpk.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+923005515809"
                  className="font-medium text-brand-green underline underline-offset-4"
                >
                  +92 300 5515809
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
