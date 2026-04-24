"use client";

import { Recommendation as RecommendationType } from "@/lib/mockData";
import { Plus } from "lucide-react";

interface RecommendationProps {
  items: RecommendationType[];
}

export default function Recommendation({ items }: RecommendationProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold text-gray-900 mb-6">이 상품과 잘 어울리는 아이템</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-3">
              <img 
                src={item.imageUrl} 
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-400 font-semibold mb-1">{item.brand}</p>
            <h4 className="text-sm text-gray-800 font-medium line-clamp-1">{item.name}</h4>
            <p className="text-sm font-bold text-gray-900 mt-1">{item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>
    </div>
  );
}
