import type { ReactNode } from "react";

export interface User {
  name: string;
  role: string;
}
export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
export type SupportCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};
export interface Notification {
  isRead: boolean;
  text: string;
  date: string;
  id: number;
}
export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  readNotification: (id: number) => void;
}
export interface Clusters {
  name: string;
  crop: string;
  farmers: number;
  date: string;
  readiness: number;
  status: string;
  totalHarvest:string
}
export interface Logistics {
  name: string;
  type: string;
  capacity: string;
  availability: string;
  price: number;
  rating: string;
  distance:string
}
