import React from 'react';
import { ModelCard } from '../ui/ModelCard';

export function ModelsView() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">AI 모델 성능 모니터링</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ModelCard name="KoBERT-v2" type="NLP" accuracy={98.2} precision={97.5} recall={98.8} />
        <ModelCard name="MesoNet-v4" type="Computer Vision" accuracy={94.5} precision={92.1} recall={95.4} />
      </div>
    </div>
  );
}
