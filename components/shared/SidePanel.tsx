import React from "react";

const SidePanel = ({ children, className }:{children: React.ReactNode, className?: string  }) => {
    return (
        <div className={`flex flex-col gap-y-5 min-h-svh ${className}`}>
            {children}
        </div>
    )
}
export default SidePanel;