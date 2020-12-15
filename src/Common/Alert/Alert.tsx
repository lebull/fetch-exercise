import React from "react";
import "./Alert.scss";

export type AlertType = "warning" | "danger" | "success";

interface AlertProps {
    type: AlertType,
    children: any
}

export const Alert = ({ type, children }: AlertProps) => {
    return <div className="Alert-wrapper">
        <div className={`Alert Alert-${type}`}>
            {children}
        </div>
    </div>
}