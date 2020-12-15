import React from "react";
import "./Alert.scss";

export type AlertType = "danger" //"warning" | "success" | "info"

interface AlertProps {
    type: AlertType,
    children: any
}

/**
 * Simple alert
 * 
 * @param AlertType - Symantic type of the alert.
 */
export const Alert = ({ type, children }: AlertProps) => {
    return <div className={`alert alert-${type}`}>
        {children}
    </div>
}