import type { ReactNode } from "react";

export interface User { 
    name: string,
    role: string
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
