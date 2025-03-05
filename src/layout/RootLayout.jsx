import React from 'react'

const RootLayout = ({ children, className }) => {
    return (
        <div className={`w-full md:p-8 p-4 ${className}`}>
            {children}
        </div>
    )
}

export default RootLayout