import React from 'react'

function Console({ logs }) {
    return (
        <div style={{ border: "1px solid grey", minHeight: "100px" }}>
            <h3>Console:</h3>
            <ul>
                {Array.isArray(logs) && logs.map((log, index) => <li key={index}>
                    {log.type} - {log.value}
                </li>)}
            </ul>
        </div>
    )
}

export default Console