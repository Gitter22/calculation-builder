import { useState } from "react"


function CalculationStep({ handleDelete, handleAdd, value, onChange, totalSteps }) {

    const [isEditing, setIsEditing] = useState(true)

    function triggerChange(type, newValue) {
        if (type === 'formula') {
            onChange({ stepResult: value.stepResult, formula: newValue, step: value.step })
        } else {
            onChange({ stepResult: newValue, formula: value.formula, step: value.step })
        }
    }
    function handleFormula(e) {
        triggerChange('formula', e.target.value)
    }
    function handleResultName(e) {
        triggerChange('stepResult', e.target.value)
    }

    return <>
        {isEditing ? (
            <div style={{ border: "1px solid orange", padding: "10px" }} onBlur={() => setIsEditing(false)}>
                <span style={{ padding: "5px", }}>  Step {value.step}: </span>
                <input
                    value={value.stepResult}
                    onChange={handleResultName}
                    style={{ padding: "5px", }}
                />
                <span style={{ padding: "5px" }} >=</span>
                <input
                    value={value.formula}
                    onChange={handleFormula}
                    style={{ padding: "5px", width: "60%" }}
                />

                {value.step > 1 &&
                    <button
                        style={{ padding: "5px", margin: "0px 5px" }}
                        onClick={() => handleDelete(value.step)}>
                        Delete
                    </button>
                }
                {totalSteps === value.step &&
                    <button
                        style={{ padding: "5px", margin: "0px 5px" }}
                        onClick={handleAdd}>
                        Add
                    </button>
                }
            </div >
        ) : (
            <div style={{ padding: "10px" }} onClick={() => { setIsEditing(true) }}>
                <span style={{ padding: "5px" }}>  Step {value.step}: </span>
                <span style={{ padding: "5px" }}>{value.stepResult}</span>
                <span style={{ padding: "5px" }}>=</span>
                <span style={{ padding: "5px" }}>{value.formula}</span>
            </div>
        )
        }
    </>
}

export default CalculationStep;