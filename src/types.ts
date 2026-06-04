export interface EquipmentItem {
  id: string;
  name: string;
  category: 'iluminacion' | 'audio' | 'efectos' | 'backline';
  subcategory: string;
  brand: string;
  rate: number; // Price in USD or CLP per day
  description: string;
  specs: string[];
  image: string;
  glowingColor: 'pink' | 'blue' | 'rust' | 'amber';
  featured?: boolean;
}

export interface CartItem {
  equipment: EquipmentItem;
  quantity: number;
}

export interface EventQuote {
  id: string;
  clientName: string;
  clientEmail: string;
  companyName: string;
  eventType: 'concert' | 'gala' | 'festival' | 'club_night' | 'private';
  audienceSize: number;
  isOutdoor: boolean;
  date: string;
  items: CartItem[];
  dmxChannels: number;
  trussFeet: number;
  transportCost: number;
  totalCost: number;
  notes?: string;
  status: 'draft' | 'submitted';
}

export interface PresetCue {
  id: string;
  name: string;
  colorRust: string;
  colorBlue: string;
  colorPink: string;
  colorAmber: string;
  strobeSpeed: number; // 0 for off, otherwise hz
  beamAngle: number; // in degrees
  intensity: number; // 0 to 100
}
