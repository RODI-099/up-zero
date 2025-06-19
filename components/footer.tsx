import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">upoZero</div>
            <div className="text-gray-300 mb-4 space-y-1">
              <p className="text-sm">대표자: 강봉채</p>
              <p className="text-sm">사업자등록번호: 552-87-03402</p>
              <p className="text-sm">주소: 전라남도 여수시 화산로 70-1 2층</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">회사소개</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/story" className="text-gray-300 hover:text-white">
                  스토리
                </Link>
              </li>
              <li>
                <Link href="/about/journey" className="text-gray-300 hover:text-white">
                  걸어온길
                </Link>
              </li>
              <li>
                <Link href="/about/location" className="text-gray-300 hover:text-white">
                  오시는길
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  서비스
                </Link>
              </li>
              <li>
                <Link href="/services/solutions" className="text-gray-300 hover:text-white">
                  솔루션
                </Link>
              </li>
              <li>
                <Link href="/services/demo" className="text-gray-300 hover:text-white">
                  데모
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white">
                  고객지원
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">고객센터</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">전화: 1668 2293</li>
              <li className="text-gray-300">이메일: info@upozero.com</li>
              <li className="text-gray-300">운영시간: 24시간 연중무휴</li>
              <li>
                <Link href="/consultation" className="text-blue-400 hover:text-blue-300">
                  무료 상담 신청
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} upoZero. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              이용약관
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
              사이트맵
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}