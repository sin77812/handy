export default function FinalCTASection() {
  return (
    <section className="bg-primary px-md py-xl tablet:py-2xl">
      <div className="mx-auto max-w-container text-center">
        <h2 className="mb-lg text-h1-mobile text-white tablet:text-h1-desktop">
          불편한 거 있으신가요?
          <br />
          저한테 맡기세요
        </h2>
        
        <div className="flex flex-col gap-sm tablet:flex-row tablet:justify-center tablet:gap-md">
          <a
            href="tel:01035490325"
            className="inline-block rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary transition-all hover:scale-[1.02] hover:shadow-[0_6px_16px_rgba(255,255,255,0.3)]"
          >
            전화 상담 (즉시): 010-3549-0325
          </a>
          <a
            href="#contact"
            className="inline-block rounded-xl border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-primary"
          >
            카카오톡 상담
          </a>
        </div>
        
        <div className="mt-xl space-y-xs text-white/80">
          <p className="text-2xl font-bold">송도 핸디 SONGDO HANDY</p>
          <p>운영시간: 오전 10시 ~ 오후 8시</p>
          <p>위치: 송도 전 지역 (거주 중)</p>
        </div>
      </div>
    </section>
  )
}