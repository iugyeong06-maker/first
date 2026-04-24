"use client";

import { use } from "react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import PriceComparison from "@/components/PriceComparison";
import Recommendation from "@/components/Recommendation";
import { ChevronLeft, Share2, Heart, Info } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link 
        href="/search" 
        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-6 group"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">검색 결과로 돌아가기</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-50 shadow-inner"
        >
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[#e60023] font-bold text-lg mb-1">{product.brand}</p>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Info size={16} />
                <span>AI가 이미지 분석을 통해 찾아낸 가장 유사한 제품입니다.</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>

          <div className="mt-4 p-8 bg-gray-50 rounded-3xl">
            <p className="text-sm text-gray-500 mb-1">최저가</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-gray-900">
                {Math.min(...product.prices.map(p => p.price)).toLocaleString()}
              </span>
              <span className="text-xl font-bold text-gray-900">원</span>
            </div>
          </div>

          <div className="mt-8">
             <button className="w-full py-4 bg-[#e60023] text-white rounded-full text-lg font-bold hover:bg-[#ad001a] transition-all shadow-xl shadow-red-100">
               최저가로 구매하기
             </button>
          </div>
          
          <PriceComparison prices={product.prices} />
        </motion.div>
      </div>

      <Recommendation items={product.recommendations} />
    </div>
  );
}
