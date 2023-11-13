import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            <nav>navbar</nav>
            {children}
        </div>
    )
}

export default layout