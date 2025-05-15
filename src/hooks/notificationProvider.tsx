import { useState, type ReactNode } from "react";
import { NotificationContext } from "./notificationContext";
import { Notification } from "../types";

export default function NotificationProvider({ children }: { children: ReactNode }) {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = (notification: Notification) => {
        setNotifications((prev) => [...prev, notification]);
    };

    const readNotification = (id: number) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id ? { ...notification, isRead: true } : notification
            )
        );
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, readNotification }}>
            {children}
        </NotificationContext.Provider>
    );
}