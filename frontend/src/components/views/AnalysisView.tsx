import React, { useState, useEffect, useRef } from 'react';
import { 
  AlertTriangle, 
  MessageSquare, 
  Video, 
  Maximize2,
  Minimize2, 
  Info, 
  Play, 
  Pause, 
  RotateCcw, 
  Eye 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from '../../lib/utils';
import { FeatureBar } from '../ui/FeatureBar';
import { deepfakeData, phishingText } from '../../data/mockData';
import { CheckCircle } from 'lucide-react';

export function AnalysisView({ isPlaying, setIsPlaying, decision, setDecision }: any) {

  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showLog, setShowLog] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        console.error(`전체 화면 진입 실패: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };
  
  return (
    <div ref={containerRef} className="space-y-6 bg-[#09090b] p-2">
      {/* Incident Header Card */}
      <div className="bg-[#121214] border border-white/5 rounded-2xl p-6 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center">
            <AlertTriangle className="text-red-500 w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-bold tracking-tight">INCIDENT #2024-0323-09</h2>
              <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-bold rounded uppercase tracking-wider border border-red-500/30">High Risk</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/40 font-mono">
              <span>발생 일시: 2024.03.23 09:58:17</span>
              <span>|</span>
              <span>탐지 경로: 모바일 뱅킹 실시간 채널</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleFullScreen}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-all flex items-center gap-2"
          >
            {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            {isFullScreen ? "화면 축소" : "전체 화면"}
          </button>
          <button 
            onClick={() => setShowLog(true)}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-all flex items-center gap-2"
          >
            <Info size={16} /> 상세 로그
          </button>
          {showLog && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
              <div className="bg-[#121214] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                  <h3 className="font-bold flex items-center gap-2 text-emerald-400"><Info size={18} /> 시스템 상세 로그</h3>
                  <button onClick={() => setShowLog(false)} className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition-colors">닫기</button>
                </div>
                <div className="p-6 overflow-y-auto font-mono text-[13px] leading-relaxed text-emerald-400/70 space-y-2 bg-[#0D0D0F]">
                  <p className="text-white/30">[2024-03-23 09:58:17] --- INITIALIZING ANALYSIS ---</p>
                  <p>[09:58:17] Incoming Stream: Mobile_Banking_Live_01</p>
                  <p>[09:58:18] KoBERT Intent: <span className="text-red-400">"PHISHING_IMPERSONATION"</span> (0.9822)</p>
                  <p>[09:58:19] MesoNet Frame #432 Score: <span className="text-red-400">0.9419</span></p>
                  <p>[09:58:20] XAI Weight Distribution: URL(0.95), Login(0.82), Pressure(0.64)</p>
                  <p className="text-white/30">[2024-03-23 09:58:21] --- ANALYSIS COMPLETE ---</p>
                  {/* 추가 로그 데이터가 있다면 여기에 매핑 */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left: Text Analysis (KoBERT + XAI) */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <section className="bg-[#121214] border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full shadow-lg">
            <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-emerald-400" />
                <h3 className="font-semibold">피싱 텍스트 분석 (KoBERT)</h3>
              </div>
              <span className="text-[10px] font-mono text-white/30">v2.4.1-stable</span>
            </div>
            <div className="p-6 flex-1 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">탐지 의도</p>
                  <p className="text-lg font-bold text-red-400">기관 사칭 / 긴박함</p>
                </div>
                <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">AI 신뢰도</p>
                  <p className="text-lg font-bold text-emerald-400">98.2%</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-white/60">XAI 분석 결과 (SHAP/LIME 하이라이트)</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500/60 rounded-sm" />
                    <span className="text-[10px] text-white/40">위험도 가중치</span>
                  </div>
                </div>
                <div className="p-5 bg-[#0D0D0F] border border-white/5 rounded-xl leading-relaxed text-lg font-medium min-h-[160px]">
                  {phishingText.map((item, idx) => (
                    <span 
                      key={idx}
                      className="transition-all duration-300"
                      style={{ 
                        backgroundColor: `rgba(239, 68, 68, ${item.weight * 0.6})`,
                        color: item.weight > 0.5 ? '#fff' : 'rgba(255,255,255,0.8)',
                        padding: '2px 1px',
                        borderRadius: '2px'
                      }}
                    >
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-white/60">주요 위험 키워드 기여도</p>
                <div className="space-y-2">
                  <FeatureBar label="URL 클릭 유도" value={95} color="bg-red-500" />
                  <FeatureBar label="비정상 로그인 시도" value={82} color="bg-red-400" />
                  <FeatureBar label="계정 보호 (심리적 압박)" value={64} color="bg-orange-400" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right: Video Analysis (MesoNet + XAI) */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <section className="bg-[#121214] border border-white/5 rounded-2xl overflow-hidden shadow-lg">
            <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Video size={18} className="text-emerald-400" />
                <h3 className="font-semibold">딥페이크 영상 분석 (MesoNet)</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-2 py-1 bg-red-500/10 rounded border border-red-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-red-400 uppercase">Forgery Detected</span>
                </div>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-white/10 group">
                  <img 
                    src="https://picsum.photos/seed/face/800/450" 
                    alt="Deepfake Analysis" 
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-red-500/40 blur-2xl rounded-full animate-pulse" />
                    <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-500/30 blur-xl rounded-full animate-pulse delay-700" />
                    <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-red-500/20 blur-3xl rounded-full animate-pulse delay-300" />
                    <div className="absolute top-[20%] left-[30%] w-[40%] h-[50%] border-2 border-red-500/50 rounded-lg">
                      <span className="absolute -top-6 left-0 bg-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded">FACE_FORGERY: 94.2%</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all">
                      {isPlaying ? <Pause fill="white" /> : <Play fill="white" className="ml-1" />}
                    </button>
                    <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all">
                      <RotateCcw size={18} />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <div className="h-full bg-emerald-500 w-1/3 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>00:12 / 00:45</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Eye size={10} /> Heatmap ON</span>
                    <span className="flex items-center gap-1"><Maximize2 size={10} /> 1080p</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-medium text-white/60">프레임별 위조 확률 추이</p>
                <div className="h-[180px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={deepfakeData}>
                      <defs>
                        <linearGradient id="colorProb" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                      <XAxis dataKey="frame" hide />
                      <YAxis hide domain={[0, 1]} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#18181B', border: '1px solid #ffffff10', borderRadius: '8px' }}
                        itemStyle={{ color: '#ef4444' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="probability" 
                        stroke="#ef4444" 
                        fillOpacity={1} 
                        fill="url(#colorProb)" 
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">주요 탐지 부위</span>
                    <span className="text-red-400 font-medium">눈 주변, 입술 경계</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">MesoNet 분석 결과</span>
                    <span className="text-red-400 font-medium">Deepfake (Meso-4)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#121214] border border-white/5 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 space-y-2 w-full">
                <label className="text-xs font-medium text-white/40 uppercase tracking-widest">보안 요원 최종 판정 의견</label>
                <textarea 
                  placeholder="분석 근거 및 조치 사항을 입력하세요..."
                  className="w-full bg-[#0D0D0F] border border-white/5 rounded-xl p-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-all min-h-[100px] resize-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full md:w-64">
                <button 
                  onClick={() => setDecision('phishing')}
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg",
                    decision === 'phishing' 
                      ? "bg-red-500 text-white ring-4 ring-red-500/20" 
                      : "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white"
                  )}
                >
                  <AlertTriangle size={18} /> 피싱 확정 (차단)
                </button>
                <button 
                  onClick={() => setDecision('normal')}
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg",
                    decision === 'normal' 
                      ? "bg-emerald-500 text-white ring-4 ring-emerald-500/20" 
                      : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white"
                  )}
                >
                  <CheckCircle size={18} /> 정상 판정 (해제)
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
