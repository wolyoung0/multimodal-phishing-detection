import React from 'react';

export type RiskLevel = 'High' | 'Medium' | 'Low';

export interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
  badge?: string;
}

export interface IncidentCardProps {
  id: string;
  time: string;
  risk: RiskLevel;
  active?: boolean;
  onClick?: () => void;
}

export interface FeatureBarProps {
  label: string;
  value: number;
  color: string;
}

export interface StatCardProps {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

export interface DistributionItemProps {
  label: string;
  value: number;
  color: string;
}

export interface ModelCardProps {
  name: string;
  type: string;
  accuracy: number;
  precision: number;
  recall: number;
}

export interface SettingItemProps {
  label: string;
  description: string;
  enabled?: boolean;
}
