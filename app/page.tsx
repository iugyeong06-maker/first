"use client";

import { useRouter } from "next/navigation";
import { Upload, Link as LinkIcon, Search as SearchIcon } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-white">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
          AI 비주얼 쇼핑 검색 <br />
          <span className="text-[#e60023]">사이트 정상 작동 테스트</span>
        </h1>
        <p className="text-lg text-gray-500 mb-12 font-medium">
          이 페이지가 보인다면 배포가 정상적으로 완료되었습니다.
        </p>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-2xl shadow-gray-200 transition-all">
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => router.push("/search")}
              className="px-10 py-4 bg-[#e60023] text-white rounded-full font-bold text-lg hover:bg-[#ad001a] transition-all"
            >
              검색 페이지로 이동하기
            </button>
            <p className="text-sm text-gray-400">빌드 버전 안정화 테스트 중</p>
          </div>
        </div>
      </div>
    </div>
  );
}
