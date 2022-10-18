
const constants = [{
    label: 'CGSTRate',
    value: 'CGSTRate',
}, {
    label: 'MaxCeiling',
    value: 'MaxCeiling',
}, {
    label: 'InterestRate',
    value: 'InterestRate',
}]

function ConstantsInput({ value, onChange }) {
    return (
        <div style={{ padding: "5px", display: "flex", alignItems: "center" }}>
            <label>Constants: </label>
            <select
                value={value}
                onChange={(e) =>
                    [...e.target.options]
                        .filter(({ selected }) => selected)
                        .map(({ value }) => ({ label: value, value }))
                }
                multiple
                style={{ padding: "5px", width: "100%" }}
            >
                {constants.map(opt => (
                    <option value={opt.value} key={opt.value}>
                        {opt.label}
                    </option>)
                )}
            </select>

        </div>
    )
}

export default ConstantsInput