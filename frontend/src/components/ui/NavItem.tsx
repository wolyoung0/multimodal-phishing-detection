import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { NavItemProps } from '../../types';

export function NavItem({ icon, label, active, onClick, badge }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group relative",
        active 
          ? "bg-emerald-500/10 text-emerald-400" 
          : "text-white/50 hover:text-white hover:bg-white/5"
      )}
    >
      <span className={cn("transition-colors", active ? "text-emerald-400" : "text-white/30 group-hover:text-white/60")}>
        {icon}
      </span>
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="px-1.5 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] text-center">
          {badge}
        </span>
      )}
      {active && (
        <motion.div 
          layoutId="activeNav"
          className="absolute left-0 w-1 h-6 bg-emerald-500 rounded-r-full"
        />
      )}
    </button>
  );
}
