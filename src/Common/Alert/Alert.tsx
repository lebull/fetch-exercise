import React from "react";
import "./Alert.scss";

export type AlertType = "warning" | "danger" | "success";

interface AlertProps {
    type: AlertType,
    children: any
}

export const Alert = ({ type, children }: AlertProps) => {
    return <div className={`alert alert-${type}`}>
        {children}
    </div>
}