import React from 'react';
import { Shield, Activity, Bell, LogOut, User, FileText, Zap, Settings } from 'lucide-react';
import { NavItem } from '../ui/NavItem';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 border-r border-white/5 bg-[#0D0D0F] flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <Shield className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-none tracking-tight">PhishGuard</h1>
          <span className="text-[10px] text-emerald-500 font-mono tracking-widest uppercase opacity-80">AI Security</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <NavItem icon={<Activity size={18} />} label="대시보드" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
        <NavItem icon={<Bell size={18} />} label="실시간 모니터링" badge="12" active={activeTab === 'monitoring'} onClick={() => setActiveTab('monitoring')} />
        <div className="pt-4 pb-2 px-3 text-[10px] font-bold text-white/30 uppercase tracking-widest">분석 센터</div>
        <NavItem icon={<Shield size={18} />} label="통합 보안 분석" active={activeTab === 'analysis'} onClick={() => setActiveTab('analysis')} />
        <NavItem icon={<FileText size={18} />} label="분석 이력" active={activeTab === 'history'} onClick={() => setActiveTab('history')} />
        <div className="pt-4 pb-2 px-3 text-[10px] font-bold text-white/30 uppercase tracking-widest">AI 엔진</div>
        <NavItem icon={<Zap size={18} />} label="모델 성능 관리" active={activeTab === 'models'} onClick={() => setActiveTab('models')} />
        <NavItem icon={<Settings size={18} />} label="시스템 설정" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-white/10">
            <User size={16} className="text-white/70" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">김보안 분석관</p>
            <p className="text-[10px] text-white/40 truncate">Level 4 Senior</p>
          </div>
          <LogOut size={14} className="text-white/20 group-hover:text-red-400 transition-colors" />
        </div>
      </div>
    </aside>
  );
}
