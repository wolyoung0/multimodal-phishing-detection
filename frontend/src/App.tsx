import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { IncidentQueue } from './components/layout/IncidentQueue';
import { DashboardView } from './components/views/DashboardView';
import { MonitoringView } from './components/views/MonitoringView';
import { AnalysisView } from './components/views/AnalysisView';
import { HistoryView } from './components/views/HistoryView';
import { ModelsView } from './components/views/ModelsView';
import { SettingsView } from './components/views/SettingsView';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isPlaying, setIsPlaying] = useState(false);
  const [decision, setDecision] = useState<null | 'normal' | 'phishing'>(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'monitoring':
        return <MonitoringView onSelectAnalysis={() => setActiveTab('analysis')} />;
      case 'analysis':
        return (
          <AnalysisView 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
            decision={decision} 
            setDecision={setDecision} 
          />
        );
      case 'history':
        return <HistoryView />;
      case 'models':
        return <ModelsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  const getBreadcrumb = () => {
    switch (activeTab) {
      case 'dashboard': return { category: '관제 현황', page: '대시보드' };
      case 'monitoring': return { category: '관제 현황', page: '실시간 모니터링' };
      case 'analysis': return { category: '분석 센터', page: '통합 보안 분석 리포트' };
      case 'history': return { category: '분석 센터', page: '분석 이력' };
      case 'models': return { category: 'AI 엔진', page: '모델 성능 관리' };
      case 'settings': return { category: 'AI 엔진', page: '시스템 설정' };
      default: return { category: '관제 현황', page: '대시보드' };
    }
  };

  const breadcrumb = getBreadcrumb();

  return (
    <div className="flex h-screen bg-[#0A0A0B] text-[#E4E4E4] font-sans selection:bg-emerald-500/30">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header breadcrumb={breadcrumb} />

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {(activeTab === 'dashboard' || activeTab === 'analysis') && (
        <IncidentQueue activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
}
