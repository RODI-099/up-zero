"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function BodycamWarningCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-[#5865F2] p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-white" />
          <h3 className="font-bold text-white">몸캠피싱 위험 경고</h3>
        </div>
        <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          긴급
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-[#5865F2] rounded-full flex-shrink-0 flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-medium">보안 전문가</p>
            <div className="bg-gray-100 p-3 rounded-lg mt-1 text-sm">
              <p className="mb-2">⚠️ <strong>최근 몸캠피싱 수법 주의보</strong></p>
              <p className="text-gray-700 mb-2">SNS에서 모르는 사람이 친근하게 다가와 영상통화를 유도한 후, 녹화한 영상으로 협박하는 사례가 증가하고 있습니다.</p>
              <p className="text-gray-700">피해를 입으셨다면 <span className="text-[#5865F2] font-medium">즉시 경찰(☎182)에 신고</span>하세요.</p>
            </div>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline" className="text-xs h-7">
                자세히 보기
              </Button>
              <Button size="sm" className="bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs h-7">
                <Link href="/consultation">전문가 상담</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="bg-gray-50 p-3 rounded-lg mt-3">
          <div className="text-sm text-gray-500 mb-2">몸캠피싱 피해 현황 (2025년 7월)</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-2 rounded border border-gray-200">
              <div className="text-lg font-bold text-[#5865F2]">1,248건</div>
              <div className="text-xs text-gray-500">신고 건수</div>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200">
              <div className="text-lg font-bold text-[#5865F2]">87%</div>
              <div className="text-xs text-gray-500">20대 피해자</div>
            </div>
          </div>
        </div>
        
        {/* Action */}
        <div className="mt-4">
          <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4]">
            커뮤니티에서 더 알아보기
          </Button>
        </div>
      </div>
    </div>
  )
}
