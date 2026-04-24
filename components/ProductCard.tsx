"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Download, MoreHorizontal } from "lucide-react";
import { Product } from "@/lib/mockData";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="relative mb-4 group cursor-zoom-in"
    >
      <Link href={`/search/${product.id}`}>
        <div className="relative rounded-2xl overflow-hidden bg-gray-100">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full object-cover group-hover:brightness-90 transition-all duration-300"
            style={{ height: product.height ? `${product.height}px` : "auto" }}
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-lg drop-shadow-md">{product.brand}</span>
              <button className="bg-[#e60023] text-white p-3 rounded-full hover:bg-[#ad001a] transition-colors shadow-lg">
                저장
              </button>
            </div>
            
            <div className="flex justify-end gap-2">
              <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                <Download size={18} />
              </button>
              <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="mt-2 px-1">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{product.brand}</p>
      </div>
    </motion.div>
  );
}
