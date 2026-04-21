import React from 'react';
import { FileText, Search } from 'lucide-react';

export function HistoryView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">분석 이력 아카이브</h2>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm flex items-center gap-2">
            <FileText size={16} /> 리포트 내보내기
          </button>
        </div>
      </div>
      <div className="bg-[#121214] border border-white/5 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
            <Search size={32} className="text-white/20" />
          </div>
          <p className="text-white/40">과거 분석 데이터를 불러오는 중입니다...</p>
        </div>
      </div>
    </div>
  );
}
