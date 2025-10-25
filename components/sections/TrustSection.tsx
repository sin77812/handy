export default function TrustSection() {
  const trustItems = [
    {
      title: '인천대 재학생',
      description: '신분 보장',
      icon: '🎓'
    },
    {
      title: '다양한 경험',
      description: '제조업 공장 A~Z\n카페 운영\n건물 정비/관리',
      icon: '💼'
    },
    {
      title: '송도 거주',
      description: '30분 내 출동 가능',
      icon: '📍'
    },
    {
      title: '100% 보장',
      description: '해결 못 하면 무료',
      icon: '✅'
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
              className="flex items-start gap-md rounded-2xl bg-white p-md shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-light/10 text-2xl">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="mb-xs text-h3-mobile font-semibold">{item.title}</h3>
                <p className="whitespace-pre-line text-neutral-text-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}