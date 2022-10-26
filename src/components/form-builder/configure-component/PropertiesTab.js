import React from 'react'
import { Button, Input, Space } from 'antd'
import { FB_ACTIONS } from '../formschemaReducer'
import OptionAdder from './OptionAdder'

function PropertiesTab({ field, dispatch }) {
    console.log("🚀 ~ file: PropertiesTab.js ~ line 4 ~ PropertiesTab ~ schema", field)

    function handleLabelChange(e) {
        console.log(e.target.value)
        dispatch({ type: FB_ACTIONS.LABEL_CHANGED, label: e.target.value })
    }

    function handleKeyChange(e) {
        console.log(e.target.value)
        dispatch({ type: FB_ACTIONS.NAME_CHANGED, name: e.target.value })

    }


    function handleRemove() {
        dispatch({ type: FB_ACTIONS.FIELD_DELETED })
    }

    function handleOptionsChange() {
    }

    return (
        <div style={{ padding: "5px" }}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Button block type='primary' onClick={handleRemove}>Remove</Button>
                <label>
                    Enter Question or Label
                    <Input
                        placeholder='Enter label here...'
                        onChange={handleLabelChange}
                        value={field?.label || ''}
                    />
                </label>
                <label>
                    Enter Unique Identifier(key) for this question
                    <Input
                        placeholder='Enter question key...'
                        onChange={handleKeyChange}
                        value={field?.name || 'blah'}
                    />
                </label>
                <div>
                    <OptionAdder options={field?.options} onChange={handleOptionsChange} />
                </div>
            </Space>
        </div>
    )
}

export default PropertiesTab