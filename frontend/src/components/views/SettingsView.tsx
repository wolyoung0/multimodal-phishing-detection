import React from 'react';
import { SettingItem } from '../ui/SettingItem';

export function SettingsView() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-bold">시스템 설정</h2>
      <div className="space-y-4">
        <SettingItem label="자동 차단 활성화" description="위험도 95% 이상 시 AI가 자동으로 차단 조치를 수행합니다." enabled />
        <SettingItem label="실시간 알림" description="High Risk 탐지 시 분석관에게 즉시 푸시 알림을 발송합니다." enabled />
        <SettingItem label="XAI 상세 모드" description="분석 리포트에 SHAP/LIME 상세 수치를 포함합니다." />
      </div>
    </div>
  );
}
