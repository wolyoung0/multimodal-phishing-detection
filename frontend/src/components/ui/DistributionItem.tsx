import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { DistributionItemProps } from '../../types';

export function DistributionItem({ label, value, color }: DistributionItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs">
        <span className="text-white/60">{label}</span>
        <span className="font-mono font-bold">{value}%</span>
      </div>
      <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className={cn("h-full", color)} 
        />
      </div>
    </div>
  );
}
