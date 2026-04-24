"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Image as ImageIcon, Link as LinkIcon, Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleUpload = () => {
    // Simulate upload and redirect to search results
    router.push("/search");
  };

  const handleUrlSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      router.push(`/search?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          이미지 하나로 찾는 <br />
          <span className="text-[#e60023]">가장 똑똑한 쇼핑</span>
        </h1>
        <p className="text-lg text-gray-500 mb-12">
          찾고 싶은 옷이나 제품 사진을 올리거나 핀터레스트 URL을 입력해보세요.
        </p>

        <div className="bg-white rounded-3xl border-2 border-dashed border-gray-200 p-8 md:p-12 transition-all hover:border-[#e60023] group cursor-pointer" onClick={handleUpload}>
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#e60023] group-hover:scale-110 transition-transform">
              <Upload size={32} />
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="px-8 py-3 bg-[#e60023] text-white rounded-full font-semibold group-hover:bg-[#ad001a] transition-colors shadow-lg shadow-red-100 inline-block text-center">
                이미지 업로드
              </span>
              <p className="text-sm text-gray-400">파일을 이쪽으로 끌어오거나 클릭하세요</p>
            </div>

            <div className="w-full flex items-center gap-4 py-4" onClick={(e) => e.stopPropagation()}>
              <div className="h-[1px] bg-gray-100 flex-grow"></div>
              <span className="text-gray-300 text-sm font-medium">또는</span>
              <div className="h-[1px] bg-gray-100 flex-grow"></div>
            </div>

            <form onSubmit={handleUrlSearch} className="w-full flex gap-2" onClick={(e) => e.stopPropagation()}>
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <LinkIcon size={18} />
                </div>
                <input
                  type="text"
                  placeholder="핀터레스트 URL 또는 이미지 주소 입력"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-full border-none focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-black transition-colors"
              >
                검색
              </button>
            </form>
          </div>
        </div>

        {/* Suggestion tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <span className="text-sm text-gray-400 mr-2 self-center">추천:</span>
          {["데님 자켓", "캐시미어 니트", "봄 코트", "와이드 팬츠"].map((tag) => (
            <button 
              key={tag}
              onClick={() => router.push(`/search?q=${tag}`)}
              className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
