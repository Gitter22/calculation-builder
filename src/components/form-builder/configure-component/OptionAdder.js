import { Button, Input } from 'antd'
import React from 'react'

function OptionAdder({ options = [], onChange }) {
    function handleAdd() {
    }
    function handleRemove() {
    }
    function handleChange() {
    }

    return (
        <>
            <label>
                Add Options
            </label>
            <Button onClick={handleAdd}>Add Options</Button>

            {options.map((option, index) =>
                <div>
                    <Input
                        value={option.value}
                        placeholder={`Option ${index + 1}`}
                        onChange={handleChange}
                    />
                    <Button onClick={handleRemove}>Remove</Button>
                </div>)}
        </>
    )
}

export default OptionAdder