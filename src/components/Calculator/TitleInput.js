import { useState } from "react"


function TitleInput({ value, onChange }) {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <>
            {isEditing ? <div style={{ padding: "5px" }} onBlur={() => setIsEditing(false)}>
                <input
                    style={{
                        padding: "10px",
                        width: "60%",
                        backgroundColor: "lightgrey",
                        border: "none"
                    }}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    type='text'
                    placeholder='Enter Calculation name here...' />
            </div> :
                <div style={{ padding: "5px" }} onClick={() => { setIsEditing(true) }}>
                    <span
                        style={{
                            color: `${value ? "" : "grey"}`,
                            padding: "5px",

                        }}>
                        {value || "Enter Calculation name here..."}
                    </span>
                </div>}
        </>
    )
}
export default TitleInput