'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '출장비가 따로 있나요?',
      answer: '송도 전역 출장비 없습니다.\n작업비에 모두 포함되어 있어요.'
    },
    {
      question: '당일 방문 가능한가요?',
      answer: '긴급한 경우 최대한 빠르게 출동합니다.\n송도는 30분 내 도착 가능해요.'
    },
    {
      question: '정말 못 하면 무료인가요?',
      answer: '네, 100% 진심입니다.\n제가 해결하지 못한 일에는\n비용을 청구하지 않습니다.'
    },
    {
      question: '어떤 공구를 가지고 오시나요?',
      answer: '기본 공구는 항상 지참합니다.\n특수 공구가 필요한 경우\n미리 말씀드려요.'
    },
    {
      question: '이것도 가능한가요?',
      answer: '일단 연락 주세요!\n"이거 되나요?" 궁금하신 것\n뭐든 물어보세요.\n못 하는 건 정직하게 말씀드립니다.'
    }
  ]

  return (
    <section className="bg-white px-md py-xl tablet:py-2xl">
      <div className="mx-auto max-w-container">
        <h2 className="mb-lg text-center text-h2-mobile tablet:text-h2-desktop">
          자주 묻는 질문
        </h2>

        <div className="space-y-md">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-neutral-border bg-neutral-bg transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-md text-left transition-all hover:bg-white"
              >
                <h3 className="text-h3-mobile font-medium">
                  Q{index + 1}. {faq.question}
                </h3>
                <span
                  className={`text-2xl text-primary transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="border-t border-neutral-border p-md">
                  <p className="whitespace-pre-line text-neutral-text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-xl text-center">
          <p className="mb-md text-lg">
            더 궁금한 것이 있으신가요?
          </p>
          <a
            href="tel:01035490325"
            className="inline-block rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-[0_4px_12px_rgba(255,107,53,0.3)] transition-all hover:scale-[1.02] hover:bg-accent-hover hover:shadow-[0_6px_16px_rgba(255,107,53,0.4)]"
          >
            전화로 문의하기
          </a>
        </div>
      </div>
    </section>
  )
}