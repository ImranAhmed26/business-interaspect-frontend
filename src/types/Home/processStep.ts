import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: React.ReactNode;
}