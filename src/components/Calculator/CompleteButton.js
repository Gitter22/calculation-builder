import React from 'react'

function CompleteButton({ onClick }) {



    return (
        <button
            style={{ padding: "5px", marginTop: "5px" }}
            onClick={onClick}
        >
            Complete Calculation</button>
    )
}

export default CompleteButton