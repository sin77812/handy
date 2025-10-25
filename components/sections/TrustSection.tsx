export default function TrustSection() {
  const trustItems = [
    {
      title: '시행사 건물 유지보수 경험',
      description: '건물 관리 및 시설 유지보수\n긴급 상황 대응 경험'
    },
    {
      title: '제조업체 공장 근무 이력 2년',
      description: '기계 조립/해체\n다양한 공구 사용법 숙련\n품질 관리 경험'
    },
    {
      title: '송도거주 빠른 해결',
      description: '송도 전 지역 30분 내 출동\n지역 특성 완벽 파악'
    },
    {
      title: '해결 못할시 100% 환불',
      description: '작업 완료 못하면 비용 청구 안함\n정직한 서비스 약속'
    }
  ]

  return (
    <section className="bg-neutral-bg px-md py-xl tablet:py-2xl">
      <div className="mx-auto max-w-container">
        <h2 className="mb-lg text-center text-h2-mobile tablet:text-h2-desktop">
          왜 저를 믿어도 될까요?
        </h2>
        
        <div className="grid grid-cols-1 gap-md tablet:grid-cols-2 desktop:gap-lg">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
            >
              <div className="mb-sm flex h-3 w-full rounded-full bg-primary-light/10">
                <div className="h-full w-4/5 rounded-full bg-primary"></div>
              </div>
              <h3 className="mb-sm text-h3-mobile font-semibold text-primary">{item.title}</h3>
              <p className="whitespace-pre-line text-neutral-text-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}