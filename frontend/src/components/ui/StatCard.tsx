import React from 'react';
import { cn } from '../../lib/utils';
import { StatCardProps } from '../../types';

export function StatCard({ label, value, change, icon }: StatCardProps) {
  const isPositive = change.startsWith('+');
  return (
    <div className="bg-[#121214] border border-white/5 rounded-2xl p-5 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 bg-white/[0.03] rounded-xl flex items-center justify-center border border-white/5">
          {icon}
        </div>
        <span className={cn(
          "text-[10px] font-bold px-1.5 py-0.5 rounded", 
          isPositive ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"
        )}>
          {change}
        </span>
      </div>
      <p className="text-xs text-white/40 mb-1">{label}</p>
      <p className="text-2xl font-bold tracking-tight">{value}</p>
    </div>
  );
}
