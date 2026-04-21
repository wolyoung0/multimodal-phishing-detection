import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { incidents } from '../../data/mockData';

export function MonitoringView({ onSelectAnalysis }: { onSelectAnalysis: () => void }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">실시간 모니터링 스트림</h2>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-white/40">LIVE UPDATING</span>
        </div>
      </div>

      <div className="bg-[#121214] border border-white/5 rounded-2xl overflow-hidden shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.02] border-b border-white/5">
              <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">사건 ID</th>
              <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">유형</th>
              <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">위험도</th>
              <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">AI 신뢰도</th>
              <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">발생 시각</th>
              <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">상태</th>
              <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">액션</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {incidents.map((item, idx) => (
              <tr key={idx} className="hover:bg-white/[0.01] transition-colors group">
                <td className="px-6 py-4 font-mono text-xs text-white/60">{item.id}</td>
                <td className="px-6 py-4 text-sm font-medium">{item.type}</td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-bold uppercase border",
                    item.risk === 'High' ? 'text-red-400 border-red-400/20 bg-red-400/5' : 
                    item.risk === 'Medium' ? 'text-orange-400 border-orange-400/20 bg-orange-400/5' : 
                    'text-emerald-400 border-emerald-400/20 bg-emerald-400/5'
                  )}>
                    {item.risk}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-xs text-emerald-400">{item.conf}</td>
                <td className="px-6 py-4 text-xs text-white/40">{item.time}</td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-2 text-xs text-white/60">
                    {item.status === '분석 중' && <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />}
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button 
                    onClick={onSelectAnalysis}
                    className="p-2 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-lg transition-all text-white/20"
                  >
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
