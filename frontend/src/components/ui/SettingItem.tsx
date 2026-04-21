import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { SettingItemProps } from '../../types';

export function SettingItem({ label, description, enabled }: SettingItemProps) {
  const [isOn, setIsOn] = useState(enabled);
  return (
    <div className="flex items-center justify-between p-4 bg-[#121214] border border-white/5 rounded-xl">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-xs text-white/40">{description}</p>
      </div>
      <button 
        onClick={() => setIsOn(!isOn)}
        className={cn(
          "w-12 h-6 rounded-full transition-all relative p-1",
          isOn ? "bg-emerald-500" : "bg-white/10"
        )}
      >
        <motion.div 
          animate={{ x: isOn ? 24 : 0 }}
          className="w-4 h-4 bg-white rounded-full transition-all"
        />
      </button>
    </div>
  );
}
