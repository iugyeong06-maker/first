"use client";

import Link from "next/link";
import { Search, Bell, MessageCircle, User, Camera } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white z-50 px-4 md:px-8 flex items-center gap-4">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <div className="w-8 h-8 bg-[#e60023] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">P</span>
        </div>
      </Link>

      <Link href="/" className="font-semibold text-gray-900 hidden sm:block">홈</Link>

      {/* Search Bar */}
      <div className="flex-grow max-w-5xl">
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 bg-[#efefef] border-transparent rounded-full focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all outline-none text-base"
            placeholder="검색하거나 이미지 URL을 입력하세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell size={24} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <MessageCircle size={24} />
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <User size={24} />
        </button>
      </div>
    </nav>
  );
}
