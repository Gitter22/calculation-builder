import React from 'react'

const resultInputOptions = [{
    label: 'CapitalExpenditure',
    value: 'CapitalExpenditure',
}, {
    label: 'MonthlyRent',
    value: 'MonthlyRent',
}, {
    label: 'YearlyRevenue',
    value: 'YearlyRevenue',
}]

function Result(value, onChange, onDeleteResult, onSaveResut) {

    function triggerChange(type, newValue) {
        if (type === 'formula') {
            onChange({ stepResult: value.stepResult, formula: newValue, step: value.step })
        } else {
            onChange({ stepResult: newValue, formula: value.formula, step: value.step })
        }
    }
    function handleResult(e) {
        triggerChange('formula', e.target.value)
    }
    function handleRemarks(e) {
        triggerChange('stepResult', e.target.value)
    }

    return (
        <div style={{ margin: "10px", border: "1px solid grey" }}>
            <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
                <label style={{ fontSize: "14px", marginRight: "50px" }}>Result:</label>
                <select
                    value={value.result}
                    onChange={handleResult}
                    style={{ padding: "5px", width: "40%" }}
                >
                    {resultInputOptions.map(opt => (
                        <option value={opt.value} key={opt.value}>
                            {opt.label}
                        </option>)
                    )}
                </select>
                <button
                    style={{ padding: "5px", margin: "0px 5px", }}
                    onClick={onDeleteResult}>
                    Delete
                </button>
                <button
                    style={{ padding: "5px", margin: "0px 5px" }}
                    onClick={onSaveResut}>
                    Save Result
                </button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ fontSize: "14px", marginRight: "50px" }}>Remarks:</label>
                <textarea
                    style={{ padding: "5px", margin: "5px", width: "90%", minHeight: "150px" }}
                    value={value.remarks}
                    onChange={(e) => handleRemarks(e.target.value)}
                >
                </textarea>
            </div>
        </div>
    )
}

export default Result