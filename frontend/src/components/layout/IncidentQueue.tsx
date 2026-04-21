import React from 'react';
import { BarChart3 } from 'lucide-react';
import { IncidentCard } from '../ui/IncidentCard';

interface IncidentQueueProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function IncidentQueue({ activeTab, setActiveTab }: IncidentQueueProps) {
  return (
    <aside className="w-80 border-l border-white/5 bg-[#0D0D0F] flex flex-col hidden xl:flex">
      <div className="p-6 border-b border-white/5">
        <h3 className="font-bold flex items-center gap-2">
          <BarChart3 size={18} className="text-emerald-400" />
          실시간 탐지 큐
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        <IncidentCard id="2024-0323-09" time="방금 전" risk="High" active={activeTab === 'analysis'} onClick={() => setActiveTab('analysis')} />
        <IncidentCard id="2024-0323-08" time="12분 전" risk="Medium" />
        <IncidentCard id="2024-0323-07" time="24분 전" risk="High" />
        <IncidentCard id="2024-0323-06" time="45분 전" risk="Low" />
        <IncidentCard id="2024-0323-05" time="1시간 전" risk="Medium" />
        <IncidentCard id="2024-0323-04" time="2시간 전" risk="High" />
      </div>
      <div className="p-4 bg-white/[0.02] border-t border-white/5">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/40">오늘 탐지 건수</span>
            <span className="font-mono font-bold">1,284</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/40">AI 자동 차단</span>
            <span className="font-mono font-bold text-emerald-400">942</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[73%]" />
          </div>
        </div>
      </div>
    </aside>
  );
}
