'use client'

import { useState } from 'react'

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('emergency')

  const topServices = [
    {
      title: '변기/싱크 막힘',
      price: '25,000원',
      time: '30분~1시간',
      icon: '🚽'
    },
    {
      title: '전구/조명 교체',
      price: '10,000원',
      time: '15~30분',
      icon: '💡'
    },
    {
      title: '가구 조립/배치',
      price: '20,000원~',
      time: '1~2시간',
      icon: '🔧'
    }
  ]

  const serviceCategories = {
    emergency: {
      title: '긴급 서비스',
      services: [
        { name: '변기/싱크 막힘', price: '25,000원' },
        { name: '수도꼭지 수리', price: '15,000원' },
        { name: '문/서랍 고장', price: '20,000원' },
        { name: '배관 교체/점검', price: '20,000원' }
      ]
    },
    regular: {
      title: '정기 서비스',
      services: [
        { name: '화장실 청소', price: '30,000원' },
        { name: '베란다 청소', price: '30,000원' },
        { name: '에어컨 필터 청소', price: '40,000원' },
        { name: '선반/커튼 설치', price: '20,000원' }
      ]
    },
    other: {
      title: '기타 서비스',
      services: [
        { name: '심부름/장보기', price: '15,000원' },
        { name: '세차', price: '30,000원' },
        { name: '짐 옮기기', price: '문의' },
        { name: '반려동물 산책', price: '15,000원' },
        { name: '기타 잡일', price: '10,000원~' }
      ]
    }
  }

  return (
    <section className="bg-neutral-bg px-md py-xl tablet:py-2xl">
      <div className="mx-auto max-w-container">
        <h2 className="mb-lg text-center text-h2-mobile tablet:text-h2-desktop">
          서비스 & 가격
        </h2>

        {/* TOP 3 서비스 */}
        <div className="mb-xl">
          <h3 className="mb-md text-center text-h3-mobile tablet:text-h3-desktop">
            가장 의뢰 많은 서비스
          </h3>
          <div className="flex gap-md overflow-x-auto pb-md">
            {topServices.map((service, index) => (
              <div
                key={index}
                className="min-w-[280px] flex-1 rounded-2xl bg-white p-md shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
              >
                <div className="mb-md text-4xl">{service.icon}</div>
                <h4 className="mb-xs text-lg font-semibold">{service.title}</h4>
                <p className="mb-xs text-price text-success">{service.price}</p>
                <p className="text-small text-neutral-text-light">{service.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 전체 서비스 리스트 */}
        <div className="mb-xl">
          <h3 className="mb-md text-center text-h3-mobile tablet:text-h3-desktop">
            전체 서비스
          </h3>
          
          {/* 탭 네비게이션 */}
          <div className="mb-md flex justify-center gap-sm">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`rounded-lg px-md py-sm font-medium transition-all ${
                  activeTab === key
                    ? 'bg-primary text-white'
                    : 'bg-white text-neutral-text hover:bg-neutral-bg'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* 서비스 리스트 */}
          <div className="rounded-2xl bg-white p-md shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            {serviceCategories[activeTab as keyof typeof serviceCategories].services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center justify-between py-sm ${
                  index !== 0 ? 'border-t border-neutral-border' : ''
                }`}
              >
                <span className="font-medium">{service.name}</span>
                <span className="text-price text-success">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 불가능한 작업 */}
        <div className="rounded-2xl border-2 border-error/20 bg-error/5 p-md">
          <h3 className="mb-sm text-h3-mobile font-semibold text-error">
            이런 일들은 정중하게 거절하고 있습니다.
          </h3>
          <ul className="space-y-xs text-neutral-text">
            <li>• 전기 공사 (위험)</li>
            <li>• 고압 배관 (자격 필요)</li>
            <li>• 가스 관련 (법적 제한)</li>
            <li>• 등등</li>
          </ul>
          <p className="mt-sm text-small text-neutral-text-light">
            전문 자격이 필요한 일은, 실제 전문가가 해야하는 고위험군
          </p>
        </div>
      </div>
    </section>
  )
}