export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: '전화 or 카톡 상담',
      description: '"이런 문제가 있어요"\n5분 내 답변',
      icon: '📞'
    },
    {
      number: '2',
      title: '방문 날짜 협의',
      description: '긴급: 당일 출동 가능\n정기: 원하는 날짜 선택',
      icon: '📅'
    },
    {
      number: '3',
      title: '현장 방문 & 작업',
      description: '실제 상황 확인 후 시작\n예상 시간: 30분~2시간',
      icon: '🛠️'
    },
    {
      number: '4',
      title: '작업 완료 & 결제',
      description: '만족하지 못하면 무료\n현금/계좌이체',
      icon: '💰'
    }
  ]

  return (
    <section className="bg-neutral-bg px-md py-xl tablet:py-2xl">
      <div className="mx-auto max-w-container">
        <h2 className="mb-lg text-center text-h2-mobile tablet:text-h2-desktop">
          이용 방법
        </h2>

        {/* 4단계 프로세스 */}
        <div className="mb-xl grid grid-cols-1 gap-md tablet:grid-cols-2 desktop:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-white p-md shadow-[0_2px_8px_rgba(0,0,0,0.06)] animate-fade-in-delay-${index * 100}`}
            >
              {/* 단계 번호 */}
              <div className="absolute -top-3 -left-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white shadow-[0_4px_12px_rgba(255,107,53,0.3)]">
                {step.number}
              </div>
              
              {/* 아이콘 */}
              <div className="mb-md mt-md text-center text-3xl">
                {step.icon}
              </div>
              
              {/* 내용 */}
              <h3 className="mb-sm text-center text-h3-mobile font-semibold">
                {step.title}
              </h3>
              <p className="whitespace-pre-line text-center text-small text-neutral-text-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* 추가 안내 */}
        <div className="rounded-2xl bg-primary-light/10 p-lg">
          <h3 className="mb-sm text-h3-mobile font-semibold text-primary">
            추가 안내
          </h3>
          <ul className="space-y-sm text-neutral-text">
            <li className="flex items-start gap-sm">
              <span className="text-success">✓</span>
              <span>출장비 없음 (송도 전역)</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-success">✓</span>
              <span>재방문 필요시 무료</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-success">✓</span>
              <span>뒷정리까지 깔끔하게</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}