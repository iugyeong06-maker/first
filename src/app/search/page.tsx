"use client";

import { useSearchParams } from "next/navigation";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || searchParams.get("url") || "추천 상품";

  return (
    <div className="max-w-[1800px] mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 px-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">"{query}" 검색 결과</h2>
          <p className="text-gray-500 mt-1">유사한 스타일의 제품 {MOCK_PRODUCTS.length}개를 찾았습니다.</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold transition-colors w-fit">
          <Filter size={18} />
          필터
        </button>
      </div>

      {/* Masonry Grid with CSS Columns */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 px-4">
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} className="break-inside-avoid">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      {/* Infinite Scroll simulation at the bottom */}
      <div className="py-20 flex justify-center">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-[#e60023] rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
