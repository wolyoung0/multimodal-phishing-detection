import React from 'react';
import { Activity, AlertTriangle, Video, Zap } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { StatCard } from '../ui/StatCard';
import { DistributionItem } from '../ui/DistributionItem';
import { deepfakeData } from '../../data/mockData';

export function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="총 탐지 건수" value="1,284" change="+12.5%" icon={<Activity className="text-emerald-400" />} />
        <StatCard label="피싱 확정" value="452" change="+5.2%" icon={<AlertTriangle className="text-red-400" />} />
        <StatCard label="딥페이크 탐지" value="128" change="+18.4%" icon={<Video className="text-blue-400" />} />
        <StatCard label="평균 분석 시간" value="1.2s" change="-0.3s" icon={<Zap className="text-yellow-400" />} />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-[#121214] border border-white/5 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">주간 탐지 트렌드</h3>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs focus:outline-none">
              <option>최근 7일</option>
              <option>최근 30일</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={deepfakeData}>
                <defs>
                  <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="frame" stroke="#ffffff40" fontSize={10} />
                <YAxis stroke="#ffffff40" fontSize={10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181B', border: '1px solid #ffffff10', borderRadius: '8px' }}
                  itemStyle={{ color: '#10B981' }}
                />
                <Area type="monotone" dataKey="probability" stroke="#10B981" fillOpacity={1} fill="url(#colorTrend)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-[#121214] border border-white/5 rounded-2xl p-6 shadow-lg">
          <h3 className="font-bold text-lg mb-6">위험 유형 분포</h3>
          <div className="space-y-6">
            <DistributionItem label="기관 사칭" value={45} color="bg-red-500" />
            <DistributionItem label="지인 사칭" value={25} color="bg-orange-500" />
            <DistributionItem label="금융 상품 사기" value={20} color="bg-blue-500" />
            <DistributionItem label="기타" value={10} color="bg-zinc-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
