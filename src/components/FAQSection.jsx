import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "Does KactusLabs work across different product categories and collections?",
      answer:
        "Yes. KactusLabs adapts across product types and collections, ensuring a seamless AI-driven merchandising experience across your entire catalog."
    },
    {
      question:
        "Is customer data secure and compliant with privacy standards?",
      answer:
        "Absolutely. We follow strict encryption and compliance standards to ensure all customer data is protected and privacy-safe."
    },
    {
      question:
        "How quickly does KactusLabs enhance the product experience?",
      answer:
        "Most brands see improved engagement and conversion metrics within days of integration."
    },
    {
      question:
        "Can my team manage and update KactusLabs content easily?",
      answer:
        "Yes. The platform is built for non-technical teams, allowing easy updates and content control without engineering support."
    },
    {
      question:
        "Does KactusLabs work across mobile, desktop, and storefront views?",
      answer:
        "KactusLabs is fully responsive and optimized for all devices including embedded storefront environments."
    }
  ];

  return (
    <section className="bg-[#F2F2EF] py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-24">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-6xl font-serif text-[#1E2B26]">
              FAQs
            </h2>

            <p className="mt-8 text-[#4A5A53] leading-relaxed max-w-md">
              Find answers to common questions about our AI meeting assistant
              for accountants and Bookkeepers.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-16">

            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i}>
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : i)
                    }
                    className="w-full text-left"
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-[#1E2B26] text-lg font-medium max-w-xl">
                        {faq.question}
                      </p>

                      <span
                        className={`text-[#1E2B26] text-2xl transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen
                        ? "max-h-40 mt-6 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#4A5A53] leading-relaxed max-w-xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}