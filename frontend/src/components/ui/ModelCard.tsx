import React from 'react';
import { FeatureBar } from './FeatureBar';
import { ModelCardProps } from '../../types';

export function ModelCard({ name, type, accuracy, precision, recall }: ModelCardProps) {
  return (
    <div className="bg-[#121214] border border-white/5 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-xs text-white/40">{type}</p>
        </div>
        <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-500/20">
          HEALTHY
        </div>
      </div>
      <div className="space-y-4">
        <FeatureBar label="Accuracy" value={accuracy} color="bg-emerald-500" />
        <FeatureBar label="Precision" value={precision} color="bg-blue-500" />
        <FeatureBar label="Recall" value={recall} color="bg-purple-500" />
      </div>
    </div>
  );
}
