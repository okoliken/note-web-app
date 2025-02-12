import React from "react";

const SidePanel = ({ children, className }:{children: React.ReactNode, className?: string  }) => {
    return (
        <div className={`flex flex-col gap-y-5 w-full max-w-[18.125rem] min-h-svh ${className}`}>
            {children}
        </div>
    )
}
export default SidePanel;