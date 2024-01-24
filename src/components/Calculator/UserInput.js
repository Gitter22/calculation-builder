

const userInputOptions = [{
    label: 'CapitalExpenditure',
    value: 'CapitalExpenditure',
}, {
    label: 'MonthlyRent',
    value: 'MonthlyRent',
}, {
    label: 'YearlyRevenue',
    value: 'YearlyRevenue',
}]

function UserInput({ value, onChange }) {
    return (
        <div style={{ padding: "5px", display: "flex", alignItems: "center" }}>
            <label style={{ fontSize: "14px" }}>User Input:</label>
            <select
                value={value}
                onSelect={(e) => console.log(e)}
                style={{ padding: "5px", width: "100%" }}
            >
                {userInputOptions.map(opt => (
                    <option value={opt.value} key={opt.value}>
                        {opt.label}
                    </option>)
                )}
            </select>
        </div>
    )
}

export default UserInput

// 