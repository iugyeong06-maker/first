"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Camera, Image as ImageIcon, Link as LinkIcon, Upload, X, Search as SearchIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [url, setUrl] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSearch = () => {
    // Simulate analyzing and redirect
    router.push("/search?type=image");
  };

  const handleUrlSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      router.push(`/search?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
          이미지 하나로 찾는 <br />
          <span className="text-[#e60023]">완벽한 스타일</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-12 font-medium">
          원하는 옷의 사진이나 핀터레스트 주소를 입력하세요. <br />
          AI가 최저가와 유사 상품을 즉시 찾아드립니다.
        </p>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-2xl shadow-gray-200 transition-all group relative">
          <AnimatePresence mode="wait">
            {!preview ? (
              <motion.div 
                key="upload-zone"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-6"
              >
                <div 
                  onClick={handleUploadClick}
                  className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:text-[#e60023] group-hover:bg-red-50 transition-all cursor-pointer border-2 border-dashed border-gray-200 group-hover:border-[#e60023]"
                >
                  <Upload size={36} />
                </div>
                
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileSelect} 
                />

                <div className="flex flex-col gap-2">
                  <button 
                    onClick={handleUploadClick}
                    className="px-10 py-4 bg-[#e60023] text-white rounded-full font-bold text-lg hover:bg-[#ad001a] transition-all shadow-xl shadow-red-200 active:scale-95"
                  >
                    이미지 업로드
                  </button>
                  <p className="text-sm text-gray-400 font-medium tracking-wide">JPG, PNG 파일 지원</p>
                </div>

                <div className="w-full flex items-center gap-4 py-4">
                  <div className="h-[1px] bg-gray-100 flex-grow"></div>
                  <span className="text-gray-300 text-sm font-bold uppercase tracking-widest">OR</span>
                  <div className="h-[1px] bg-gray-100 flex-grow"></div>
                </div>

                <form onSubmit={handleUrlSearch} className="w-full flex gap-3">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400">
                      <LinkIcon size={20} />
                    </div>
                    <input
                      type="text"
                      placeholder="핀터레스트 URL 또는 이미지 주소"
                      className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-full border border-gray-100 focus:border-[#e60023] focus:ring-4 focus:ring-red-50 outline-none transition-all text-base"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <button 
                    type="submit"
                    className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all active:scale-95"
                  >
                    검색
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="preview-zone"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
                  <img src={preview} alt="Preview" className="w-full h-full object-contain" />
                  <button 
                    onClick={() => setPreview(null)}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-all shadow-md"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="flex gap-4 w-full">
                  <button 
                    onClick={() => setPreview(null)}
                    className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-full font-bold hover:bg-gray-200 transition-all"
                  >
                    다시 선택
                  </button>
                  <button 
                    onClick={handleSearch}
                    className="flex-[2] py-4 bg-[#e60023] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#ad001a] transition-all shadow-xl shadow-red-200"
                  >
                    <SearchIcon size={20} />
                    이 이미지로 찾기
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Suggestion tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <span className="text-sm text-gray-400 font-bold mr-2 self-center uppercase tracking-tighter">Popular:</span>
          {["코듀로이 셔츠", "가죽 백팩", "트렌치 코트", "피셔맨 니트"].map((tag) => (
            <button 
              key={tag}
              onClick={() => router.push(`/search?q=${tag}`)}
              className="px-5 py-2 bg-white border border-gray-100 hover:border-[#e60023] hover:text-[#e60023] rounded-full text-sm text-gray-600 font-semibold transition-all shadow-sm hover:shadow-md"
            >
              #{tag}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
