import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative bg-white px-md py-xl tablet:py-2xl">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-lg tablet:flex-row tablet:items-center tablet:gap-xl">
          {/* 프로필 사진 */}
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full tablet:h-[400px] tablet:w-[400px]">
            <Image
              src="/profile-1.jpg"
              alt="송도 핸디 프로필 사진"
              fill
              className="object-cover rotate-90"
              priority
            />
          </div>
          
          {/* 텍스트 컨텐츠 */}
          <div className="flex-1 text-center tablet:text-left">
            <h1 className="mb-md text-h1-mobile tablet:text-h1-desktop">
              전문가가 필요 없는 일에,
              <br />
              전문가 비용을 내지 마세요
            </h1>
            <p className="mb-lg text-lg text-neutral-text-light">
              25세 청년의 정직한 손길
              <br />
              제조업부터 카페까지, 다양한 경험으로 대부분의 문제 해결
            </p>
            
            {/* CTA 버튼 */}
            <div className="flex flex-col gap-sm tablet:flex-row tablet:gap-md">
              <a
                href="tel:01035490325"
                className="inline-block rounded-xl bg-accent px-8 py-4 text-center text-lg font-semibold text-white shadow-[0_4px_12px_rgba(255,107,53,0.3)] transition-all hover:scale-[1.02] hover:bg-accent-hover hover:shadow-[0_6px_16px_rgba(255,107,53,0.4)]"
              >
                전화 상담하기
              </a>
              <a
                href="#contact"
                className="inline-block rounded-xl border-2 border-primary bg-white px-8 py-4 text-center text-lg font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                카톡 문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}