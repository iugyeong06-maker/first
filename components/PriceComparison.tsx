"use client";

import { Price } from "@/lib/mockData";
import { ExternalLink, CreditCard, Gift } from "lucide-react";

interface PriceComparisonProps {
  prices: Price[];
}

export default function PriceComparison({ prices }: PriceComparisonProps) {
  if (!prices || prices.length === 0) return null;

  return (
    <div className="mt-8 border rounded-2xl overflow-hidden bg-white shadow-sm">
      <div className="bg-gray-50 px-6 py-4 border-b">
        <h3 className="font-bold text-gray-900">최저가 및 플랫폼 비교</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-400 border-b">
              <th className="px-6 py-4 font-medium">판매처</th>
              <th className="px-6 py-4 font-medium">판매가</th>
              <th className="px-6 py-4 font-medium">혜택 및 조건</th>
              <th className="px-6 py-4 font-medium text-right">바로가기</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {prices.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                      LOGO
                    </div>
                    <span className="font-semibold text-gray-800">{item.platform}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#e60023]">
                      {item.price.toLocaleString()}원
                    </span>
                    {item.discountRate && (
                      <span className="text-xs text-gray-400 line-through">
                        {item.originalPrice?.toLocaleString()}원 ({item.discountRate}%)
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-wrap gap-2">
                    {item.benefits?.map((benefit, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">
                        {benefit.includes("적립") ? <CreditCard size={12} /> : <Gift size={12} />}
                        {benefit}
                      </span>
                    ))}
                    {!item.benefits?.length && <span className="text-gray-400 text-sm">-</span>}
                  </div>
                </td>
                <td className="px-6 py-5 text-right">
                  <a 
                    href={item.link} 
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-black transition-colors"
                  >
                    구매하기
                    <ExternalLink size={14} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
