import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { FeatureBarProps } from '../../types';

export function FeatureBar({ label, value, color }: FeatureBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[10px] font-medium">
        <span className="text-white/50">{label}</span>
        <span className="text-white/80">{value}%</span>
      </div>
      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn("h-full rounded-full", color)} 
        />
      </div>
    </div>
  );
}
