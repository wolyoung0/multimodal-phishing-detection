import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { IncidentCardProps } from '../../types';

export function IncidentCard({ id, time, risk, active, onClick }: IncidentCardProps) {
  const riskColor = {
    High: 'text-red-400 bg-red-400/10 border-red-400/20',
    Medium: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    Low: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  }[risk];

  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-4 rounded-xl border transition-all cursor-pointer group",
        active 
          ? "bg-white/[0.05] border-emerald-500/50 shadow-lg" 
          : "bg-white/[0.02] border-white/5 hover:border-white/20"
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono text-white/40">#{id}</span>
        <span className={cn("px-1.5 py-0.5 text-[9px] font-bold rounded uppercase border", riskColor)}>
          {risk}
        </span>
      </div>
      <p className={cn("text-sm font-semibold mb-1 truncate", active ? "text-white" : "text-white/70")}>
        비정상 로그인 시도 탐지
      </p>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-white/30">{time}</span>
        <ChevronRight size={14} className={cn("transition-transform", active ? "text-emerald-400 translate-x-0" : "text-white/10 group-hover:translate-x-1")} />
      </div>
    </div>
  );
}
