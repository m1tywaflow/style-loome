import Head from "next/head";

const sections = [
  {
    id: "data-collection",
    title: "1. Data We Collect",
    content: `We collect information you provide directly to us, such as when you create an account,
    make a purchase, or contact us for support. This includes your name, email address, and usage data.`,
  },
  {
    id: "data-use",
    title: "2. How We Use Your Data",
    content: `We use collected information to provide and improve our services, process transactions,
    send notifications, and comply with legal obligations.`,
  },
  {
    id: "data-sharing",
    title: "3. Data Sharing",
    content: `We do not sell your personal data. We may share it with trusted third-party providers
    who assist in operating our platform, subject to confidentiality agreements.`,
  },
  {
    id: "cookies",
    title: "4. Cookies",
    content: `We use cookies to improve your experience. You can control cookie settings
    through your browser preferences at any time.`,
  },
  {
    id: "your-rights",
    title: "5. Your Rights",
    content: `You have the right to access, correct, or delete your personal data.
    To exercise these rights, contact us at privacy@example.com.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Our privacy and data handling practices"
        />
      </Head>
      <section className="bg-[#1C1C1C] text-white min-h-screen font-mono">
        <main className="max-w-4xl mx-auto py-24 px-6">
          <div className="mb-16">
            <h1 className="text-5xl mb-4">Privacy Policy</h1>
            <p className="text-sm  tracking-wide uppercase">
              Last updated — May 02, 2026
            </p>
          </div>
          <div className="space-y-8">
            {sections.map(({ id, title, content }) => (
              <section
                key={id}
                className="bg-[#C2B4A3] backdrop-blur-sm border border-black/5 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              >
                <h2 className="text-lg mb-3">{title}</h2>

                <p className="text-[#303030] leading-relaxed text-[15px]">
                  {content}
                </p>
              </section>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-black/10 text-center">
            <p className="text-xs text-[#303030]leading-relaxed">
              If you have any questions regarding this Privacy Policy, please{" "}
              <a
                href="/contact"
                className="underline text-[#C2B4A3] hover:text-white duration-200 transition"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
