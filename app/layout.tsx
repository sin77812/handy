import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '송도 핸디 | 저렴하고 빠른 생활 편의 서비스',
  description: '송도 지역 변기 뚫기, 전구 교체, 가구 조립 등 생활 잡일을 저렴한 가격에 해결해드립니다. 당일 출동 가능, 해결 못 하면 무료.',
  keywords: '송도 잡일, 송도 편의 서비스, 변기 뚫기, 전구 교체, 가구 조립, 송도 핸디',
  openGraph: {
    title: '송도 핸디 | 저렴하고 빠른 생활 편의 서비스',
    description: '송도 지역 생활 잡일 전문. 당일 출동, 해결 못 하면 무료.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}