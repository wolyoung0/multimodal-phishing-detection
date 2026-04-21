import React from 'react';
import { ChevronRight, Search, Bell } from 'lucide-react';

interface HeaderProps {
  breadcrumb: { category: string; page: string };
}

export function Header({ breadcrumb }: HeaderProps) {
  return (
    <header className="h-16 border-b border-white/5 bg-[#0D0D0F]/50 backdrop-blur-xl flex items-center justify-between px-8 z-10">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-white/40">
          <span>{breadcrumb.category}</span>
          <ChevronRight size={14} />
          <span className="text-white/80 font-medium">{breadcrumb.page}</span>
        </div>
        <div className="h-4 w-[1px] bg-white/10 mx-2" />
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-emerald-500/80">AI ENGINE ONLINE</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
          <input 
            type="text" 
            placeholder="사건 ID 또는 키워드 검색..." 
            className="bg-white/5 border border-white/10 rounded-lg py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-all w-64"
          />
        </div>
        <button className="p-2 hover:bg-white/5 rounded-lg text-white/60 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0A0A0B]" />
        </button>
      </div>
    </header>
  );
}
