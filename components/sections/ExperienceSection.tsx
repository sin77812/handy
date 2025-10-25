export default function ExperienceSection() {
  const experiences = [
    {
      title: '제조업체 공장',
      items: [
        'A~Z 모든 공정 경험',
        '기계 조립/해체',
        '실리콘/페인트 작업',
        '다양한 공구 사용법 습득',
        '다양한 범위의 작업 가능'
      ],
      icon: '🏭'
    },
    {
      title: '다양한 알바 경험',
      items: [
        '고객 응대 & 공간 관리',
        '청결 유지 경험'
      ],
      icon: '☕'
    },
    {
      title: '건물 정비/관리',
      items: [
        '시행사 근무 경험',
        '시설 유지보수',
        '긴급 상황 대응',
        '다양한 문제 해결'
      ],
      icon: '🏢'
    }
  ]

  return (
    <section className="bg-white px-md py-xl tablet:py-2xl">
      <div className="mx-auto max-w-container">
        <h2 className="mb-lg text-center text-h2-mobile tablet:text-h2-desktop">
          다양한 경험
        </h2>

        {/* 타임라인 */}
        <div className="relative">
          {/* 세로 연결선 (모바일) */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-primary/20 tablet:hidden" />
          
          {/* 가로 연결선 (태블릿/데스크탑) */}
          <div className="hidden tablet:absolute tablet:left-0 tablet:right-0 tablet:top-1/2 tablet:block tablet:h-0.5 tablet:w-full tablet:-translate-y-1/2 tablet:bg-primary/20" />
          
          <div className="space-y-lg tablet:grid tablet:grid-cols-3 tablet:gap-lg tablet:space-y-0">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in">
                <div className="flex items-start gap-md tablet:flex-col tablet:items-center tablet:text-center">
                  {/* 아이콘 서클 */}
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-2xl text-white shadow-[0_4px_12px_rgba(30,58,95,0.3)]">
                    {exp.icon}
                  </div>
                  
                  {/* 내용 */}
                  <div className="flex-1">
                    <h3 className="mb-sm text-h3-mobile font-semibold">{exp.title}</h3>
                    <ul className="space-y-xs text-neutral-text-light">
                      {exp.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 마무리 메시지 */}
        <div className="mt-xl rounded-2xl bg-neutral-bg p-lg text-center">
          <p className="text-quote italic text-neutral-text">
            &ldquo;전문가는 아니지만,
            <br />
            대부분의 일을 해결할 수 있습니다.
            <br /><br />
            못 하는 일은 정직하게 말씀드립니다.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}