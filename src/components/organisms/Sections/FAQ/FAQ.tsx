"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

import abstractSun from "public/abstract/abstractSun.png";

const faqData = {
  All: [
    {
      question: "How can I place an order on StyleLoom?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout.",
    },
    {
      question: "Can I modify or cancel my order after placing it?",
      answer:
        "Unfortunately, once an order is confirmed, modifications may not be possible.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, net banking, and digital wallets.",
    },
    {
      question: "How do I initiate a return?",
      answer: "Visit our Returns page and follow the provided instructions.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You’ll receive a tracking number via email once your order ships.",
    },
    {
      question: "Do you offer exchanges for products?",
      answer:
        "Currently we don’t offer direct exchanges. Please return and reorder.",
    },
  ],

  Ordering: [
    {
      question: "How can I place an order?",
      answer:
        "Browse products, add them to cart, and proceed to secure checkout.",
    },
    {
      question: "Can I order without an account?",
      answer: "Yes, guest checkout is available.",
    },
  ],

  Shipping: [
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 3–7 business days.",
    },
    {
      question: "Can I track my shipment?",
      answer:
        "Yes, tracking information will be sent to your email after dispatch.",
    },
  ],

  Returns: [
    {
      question: "What is your return policy?",
      answer: "Returns are accepted within 14 days after delivery.",
    },
    {
      question: "How do I start a return?",
      answer: "Open the Returns page and follow the instructions provided.",
    },
  ],

  Support: [
    {
      question: "How do I contact support?",
      answer: "You can contact us via email or through the contact form.",
    },
    {
      question: "What are support hours?",
      answer: "Support is available Monday–Friday from 9 AM to 6 PM.",
    },
  ],
};

const categories = Object.keys(faqData);

export default function FAQ() {
  const [active, setActive] = useState<keyof typeof faqData>("All");

  return (
    <section className="w-full  px-4 pb-20 pt-10">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[24px] border border-dashed border-[#1C1C1C]">
        <div className="relative overflow-hidden border-b border-dashed border-[#1C1C1C]">
          <div className="relative z-10 px-8 py-14 md:px-14">
            <h2 className="max-w-[850px] text-[36px] font-semibold uppercase leading-[100%] tracking-[-0.04em] text-white md:text-[64px]">
              Have Questions? We Have Answers.
            </h2>
            <p className="mt-5 max-w-[620px] text-[15px] leading-[170%] text-[#676665]">
              Ease into the world of StyleLoom with clarity. Our FAQs cover a
              spectrum of topics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item as keyof typeof faqData)}
                  className={clsx(
                    "rounded-[12px] border px-5 py-3 text-sm transition-all duration-200",
                    active === item
                      ? "border-[#C2B4A3] bg-[#C2B4A3] text-black"
                      : "border-dashed border-[#1C1C1C] text-[#B3B3B2] hover:text-white"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-[260px] md:w-[320px]">
            <Image
              src={abstractSun}
              alt="Abstract"
              fill
              priority
              className="object-contain object-right"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {faqData[active].map((item, index) => (
            <div
              key={index}
              className="border-b border-dashed border-[#1C1C1C] px-6 py-10 md:px-10 odd:border-r"
            >
              <h3 className="text-[24px] font-medium leading-[130%] tracking-[-0.03em] text-white">
                {item.question}
              </h3>
              <p className="mt-5 max-w-[580px] text-[15px] leading-[170%] text-[#676665]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
