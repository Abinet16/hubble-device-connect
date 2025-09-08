export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  status: DeviceStatus;
  location: string;
  ipAddress: string;
  serialNumber: string;
  manufacturer: string;
  model: string;
  lastSeen: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type DeviceType = 
  | 'laptop' 
  | 'desktop' 
  | 'server' 
  | 'router' 
  | 'switch' 
  | 'printer' 
  | 'tablet' 
  | 'phone' 
  | 'camera' 
  | 'other';

export type DeviceStatus = 'online' | 'offline' | 'maintenance' | 'error';

export interface DeviceStats {
  total: number;
  online: number;
  offline: number;
  maintenance: number;
  error: number;
}