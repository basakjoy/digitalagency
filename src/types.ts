export interface StatItem {
  value: string;
  label: string;
  isPixel?: boolean;
}

export interface PartnerBubble {
  id: string;
  name: string;
  type: 'icon' | 'text' | 'signature' | 'brand';
  icon?: string;
  subtext?: string;
  sizeClass?: string;
  positionClass?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  time: string;
}
