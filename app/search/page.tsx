"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProductService } from "@/lib/api";
import { Product } from "@/lib/mockData";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Loader2 } from "lucide-react";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const url = searchParams.get("url") || "";
  const query = q || url || "추천 상품";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const results = await ProductService.searchProducts({ q, url });
      setProducts(results);
      setLoading(false);
    }
    fetchData();
  }, [q, url]);

  return (
    <div className="max-w-[1800px] mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 px-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">&quot;{query}&quot; 검색 결과</h2>
          <p className="text-gray-500 mt-1">
            {loading ? "결과를 불러오는 중..." : `유사한 스타일의 제품 ${products.length}개를 찾았습니다.`}
          </p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold transition-colors w-fit">
          <Filter size={18} />
          필터
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 size={40} className="text-[#e60023] animate-spin" />
          <p className="text-gray-400 font-medium">AI가 이미지를 정밀 분석 중입니다...</p>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 px-4"
          >
            {products.map((product) => (
              <div key={product.id} className="break-inside-avoid">
                <ProductCard product={product} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
      
      {/* Footer / Empty State */}
      {!loading && products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">검색 결과가 없습니다. 다른 키워드나 이미지를 시도해 보세요.</p>
        </div>
      )}

      {!loading && products.length > 0 && (
        <div className="py-20 flex justify-center">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-[#e60023] rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <Loader2 size={40} className="text-[#e60023] animate-spin" />
        <p className="text-gray-400 font-medium">초기화 중...</p>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}
