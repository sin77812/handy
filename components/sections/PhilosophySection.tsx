import Image from 'next/image'

export default function PhilosophySection() {
  return (
    <section className="bg-white px-md py-xl tablet:py-2xl">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-lg tablet:flex-row tablet:gap-xl">
          {/* 텍스트 영역 */}
          <div className="flex-1">
            <div className="relative">
              <div className="text-6xl text-primary/20">&ldquo;</div>
              <blockquote className="mt-[-40px] pl-md text-quote italic text-neutral-text">
                대부분의 생활 불편은
                <br />
                전문가가 필요하지 않습니다.
                <br /><br />
                저는 그것을 알고,
                <br />
                해결할 수 있습니다.
                <br /><br />
                만약 제가 해결하지 못한다면,
                <br />
                비용을 받지 않습니다.
              </blockquote>
              <div className="mt-md text-right text-6xl text-primary/20">&rdquo;</div>
            </div>
            
            <div className="mt-lg rounded-xl bg-neutral-bg p-md">
              <p className="text-small text-neutral-text-light">
                사업자금을 모으는 과정입니다.
                <br />
                과도한 비용을 청구할 이유가 없습니다.
                <br />
                오직 제 시간과 노력의 대가만 받습니다.
              </p>
            </div>
          </div>
          
          {/* 두 번째 프로필 사진 */}
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl tablet:h-[400px] tablet:w-[400px]">
            <Image
              src="/profile-2.jpg"
              alt="송도 핸디 작업 모습"
              fill
              className="object-cover rotate-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}