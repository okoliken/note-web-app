import React from "react";

const InnerLayoutPanel = ({ children }:{children: React.ReactNode}) => {
    return (
        <div className={'flex flex-col gap-y-5 w-full max-w-[18.125rem] h-svh'}>
            {children}
        </div>
    )
}
export default InnerLayoutPanel;